import type { GrupoPosicion } from '../../interfaces/standings.interface';
import { StandingsRow } from '../StandingsRow/StandingsRow';
import './StandingsTable.css';

interface StandingsTableProps {
  grupo: GrupoPosicion;
}

export function StandingsTable({ grupo }: StandingsTableProps) {
  return (
    <section className="standings-table" aria-label={`Tabla de posiciones del ${grupo.nombre}`}>
      <div className="standings-table__header">
        <h2>{grupo.nombre}</h2>
      </div>

      <div className="standings-table__scroll">
        <table className="standings-table__table">
          <thead className="standings-table__head">
            <tr>
              <th className="standings-table__heading">#</th>
              <th className="standings-table__heading standings-table__heading--left">Equipo</th>
              <th className="standings-table__heading">PJ</th>
              <th className="standings-table__heading">G</th>
              <th className="standings-table__heading">E</th>
              <th className="standings-table__heading">P</th>
              <th className="standings-table__heading">GF</th>
              <th className="standings-table__heading">GC</th>
              <th className="standings-table__heading">DG</th>
              <th className="standings-table__heading">Pts</th>
            </tr>
          </thead>

          <tbody>
            {grupo.equipos.map((equipo, index) => (
              <StandingsRow key={`${grupo.nombre}-${equipo.nombre}`} equipo={equipo} posicion={index + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
