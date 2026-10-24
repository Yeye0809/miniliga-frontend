import { useMemo, useState } from "react";

import "./PartidosPage.css";
import type { FasePartido, Grupo, Partido } from "../../matches/interface/types";
import type { FiltroEstado, FiltroFase } from "../../matches/components/FiltrosPartidos";
import ResumenPartidos from "../../matches/components/ResumenPartidos";
import FiltrosPartidos from "../../matches/components/FiltrosPartidos";
import GrupoPartidos from "../../matches/components/GrupoPartidos";
import FaseEliminatoria from "../../matches/components/FaseEliminatoria";

interface Props {
  nombreTorneo: string;
  formatoTorneo?: string;
  grupos: Grupo[];
  partidos: Partido[];
  cargando?: boolean;
  error?: string | null;
}

const ordenFases: FasePartido[] = ["OCTAVOS", "CUARTOS", "SEMIFINAL", "FINAL"];

export default function PartidosPage({ nombreTorneo, formatoTorneo = "Fase de grupos + Eliminatorias", grupos, partidos, cargando = false, error = null }: Props) {
  const [fase, setFase] = useState<FiltroFase>("TODOS");
  const [estado, setEstado] = useState<FiltroEstado>("TODOS");

  const fasesDisponibles = useMemo<FiltroFase[]>(() => {
    const fases = new Set(partidos.map((partido) => partido.fase));
    const opciones: FiltroFase[] = [];
    if (fases.has("GRUPOS")) opciones.push("GRUPOS");
    ordenFases.forEach((opcion) => { if (fases.has(opcion)) opciones.push(opcion); });
    return opciones;
  }, [partidos]);

  const partidosFiltrados = useMemo(() => partidos.filter((partido) => {
    const coincideFase = fase === "TODOS" || (fase === "GRUPOS" ? partido.fase === "GRUPOS" : partido.fase === fase);
    const coincideEstado = estado === "TODOS" || partido.estado === estado;
    return coincideFase && coincideEstado;
  }), [partidos, fase, estado]);

  const partidosGrupos = fase === "TODOS" || fase === "GRUPOS";
  const partidosEliminatorias = fase !== "GRUPOS";

  return( 
  <main className="partidos-page">
    <header className="partidos-page__encabezado">
      <h1>Partidos</h1>
      <p><strong>{nombreTorneo}</strong><span aria-hidden="true"> · </span>{formatoTorneo}</p>
    </header>

    {cargando ? <div className="partidos-page__mensaje">Cargando partidos…</div> : error ? <div className="partidos-page__mensaje partidos-page__mensaje--error" role="alert">{error}</div> : <>
      <ResumenPartidos partidos={partidos} />
      <FiltrosPartidos fase={fase} estado={estado} fasesDisponibles={fasesDisponibles} onFaseChange={setFase} onEstadoChange={setEstado} />
      {partidosFiltrados.length === 0 ? <div className="partidos-page__mensaje">No hay partidos para los filtros seleccionados.</div> : <div className="partidos-page__contenido">
        {partidosGrupos && grupos.filter((grupo) => partidosFiltrados.some((partido) => partido.fase === "GRUPOS" && (partido.grupoId === grupo.id || partido.grupoNombre === grupo.nombre))).map((grupo) => {
          const deEsteGrupo = partidosFiltrados.filter((partido) => partido.fase === "GRUPOS" && (partido.grupoId === grupo.id || partido.grupoNombre === grupo.nombre));
          return <GrupoPartidos key={grupo.id} grupo={grupo} partidos={deEsteGrupo} />;
        })}
        {partidosEliminatorias && ordenFases.filter((faseEliminatoria) => partidosFiltrados.some((partido) => partido.fase === faseEliminatoria)).map((faseEliminatoria) => <FaseEliminatoria key={faseEliminatoria} fase={faseEliminatoria} partidos={partidosFiltrados.filter((partido) => partido.fase === faseEliminatoria)} />)}
      </div>}
    </>}
  </main>);
}
