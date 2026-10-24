import PartidoItem from "./PartidoItem";
import "./FaseEliminatoria.css";
import type { FasePartido, Partido } from "../interface/types";

interface Props { fase: FasePartido; partidos: Partido[] }
const nombres: Partial<Record<FasePartido, string>> = { OCTAVOS: "Octavos de final", CUARTOS: "Cuartos de final", SEMIFINAL: "Semifinales", FINAL: "Final" };

export default function FaseEliminatoria({ fase, partidos }: Props) {
  return <section className="fase-eliminatoria">
    <header className="fase-eliminatoria__encabezado"><span aria-hidden="true">🏆</span><h2>{nombres[fase] || fase}</h2><span>{partidos.length} {partidos.length === 1 ? "partido" : "partidos"}</span></header>
    {partidos.length ? partidos.map((partido) => <PartidoItem key={partido.id} partido={partido} />) : <p className="fase-eliminatoria__vacio">No hay partidos para los filtros seleccionados.</p>}
  </section>;
}
