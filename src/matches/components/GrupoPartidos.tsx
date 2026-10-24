import { useState } from "react";

import PartidoItem from "./PartidoItem";
import "./GrupoPartidos.css";
import type { Grupo, Partido } from "../interface/types";

interface Props { grupo: Grupo; partidos: Partido[]; inicialmenteAbierto?: boolean }

export default function GrupoPartidos({ grupo, partidos, inicialmenteAbierto = true }: Props) {
  const [abierto, setAbierto] = useState(inicialmenteAbierto);
  return <section className="grupo-partidos">
    <button className="grupo-partidos__encabezado" type="button" aria-expanded={abierto} onClick={() => setAbierto((actual) => !actual)}>
      <span className="grupo-partidos__icono" aria-hidden="true">♧</span>
      <strong>{grupo.nombre}</strong>
      <span className="grupo-partidos__cantidad">{partidos.length} {partidos.length === 1 ? "partido" : "partidos"}</span>
      <span className={`grupo-partidos__chevron ${abierto ? "is-open" : ""}`} aria-hidden="true">⌄</span>
    </button>
    {abierto && <div className="grupo-partidos__lista">
      {partidos.length ? partidos.map((partido) => <PartidoItem key={partido.id} partido={partido} />) : <p className="grupo-partidos__vacio">No hay partidos para los filtros seleccionados.</p>}
    </div>}
  </section>;
}
