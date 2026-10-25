import type { Partido } from "../interface/types";
import "./ResumenPartidos.css";

interface Props { partidos: Partido[] }

export default function ResumenPartidos({ partidos }: Props) {
  const jugados = partidos.filter((partido) => partido.estado === "FINALIZADO").length;
  const pendientes = partidos.filter((partido) => partido.estado === "PENDIENTE").length;

  return (
    <section className="resumen-partidos" aria-label="Resumen de partidos">
      <article className="resumen-partidos__card">
        <span className="resumen-partidos__icon resumen-partidos__icon--neutral" aria-hidden="true">⚽</span>
        <div><strong>{partidos.length}</strong><span>Total de partidos</span></div>
      </article>
      <article className="resumen-partidos__card">
        <span className="resumen-partidos__icon resumen-partidos__icon--green" aria-hidden="true">✓</span>
        <div><strong>{jugados}</strong><span>Jugados</span></div>
      </article>
      <article className="resumen-partidos__card">
        <span className="resumen-partidos__icon resumen-partidos__icon--neutral" aria-hidden="true">◷</span>
        <div><strong>{pendientes}</strong><span>Pendientes</span></div>
      </article>
    </section>
  );
}
