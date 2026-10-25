
import type { FasePartido } from "../interface/types";
import "./FiltrosPartidos.css";

export type FiltroFase = "TODOS" | "GRUPOS" | FasePartido;
export type FiltroEstado = "TODOS" | "PENDIENTE" | "FINALIZADO";

interface Props {
  fase: FiltroFase;
  estado: FiltroEstado;
  fasesDisponibles: FiltroFase[];
  onFaseChange: (fase: FiltroFase) => void;
  onEstadoChange: (estado: FiltroEstado) => void;
}

const etiquetasFase: Record<FiltroFase, string> = {
  TODOS: "Todos", GRUPOS: "Grupos", OCTAVOS: "Octavos de final",
  CUARTOS: "Cuartos de final", SEMIFINAL: "Semifinales", FINAL: "Final",
};
const etiquetasEstado: Record<FiltroEstado, string> = {
  TODOS: "Todos", PENDIENTE: "Pendientes", FINALIZADO: "Finalizados",
};

export default function FiltrosPartidos({ fase, estado, fasesDisponibles, onFaseChange, onEstadoChange }: Props) {
  const orden: FiltroFase[] = ["TODOS", "GRUPOS", "OCTAVOS", "CUARTOS", "SEMIFINAL", "FINAL"];
  return (
    <section className="filtros-partidos" aria-label="Filtros de partidos">
      <div className="filtros-partidos__fila" role="group" aria-label="Filtrar por fase">
        {orden.filter((opcion) => opcion === "TODOS" || fasesDisponibles.includes(opcion)).map((opcion) => (
          <button key={opcion} type="button" className={`filtros-partidos__boton ${fase === opcion ? "is-active" : ""}`} aria-pressed={fase === opcion} onClick={() => onFaseChange(opcion)}>
            {etiquetasFase[opcion]}
          </button>
        ))}
      </div>
      <div className="filtros-partidos__separador" />
      <div className="filtros-partidos__fila" role="group" aria-label="Filtrar por estado">
        {(Object.keys(etiquetasEstado) as FiltroEstado[]).map((opcion) => (
          <button key={opcion} type="button" className={`filtros-partidos__boton filtros-partidos__boton--estado ${estado === opcion ? "is-active" : ""}`} aria-pressed={estado === opcion} onClick={() => onEstadoChange(opcion)}>
            {opcion === "TODOS" && <span aria-hidden="true">↻ </span>}{etiquetasEstado[opcion]}
          </button>
        ))}
      </div>
    </section>
  );
}
