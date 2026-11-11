import type { EquipoPosicion } from '../../interfaces/standings.interface';

interface StandingsRowProps {
  equipo: EquipoPosicion;
  posicion: number;
}

export function StandingsRow({ equipo, posicion }: StandingsRowProps) {
  return (
    <tr className="standings-table__row">
      <td className="standings-table__cell">{posicion}</td>
      <td className="standings-table__cell standings-table__cell--team">{equipo.nombre}</td>
      <td className="standings-table__cell">{equipo.pj}</td>
      <td className="standings-table__cell">{equipo.g}</td>
      <td className="standings-table__cell">{equipo.e}</td>
      <td className="standings-table__cell">{equipo.p}</td>
      <td className="standings-table__cell">{equipo.gf}</td>
      <td className="standings-table__cell">{equipo.gc}</td>
      <td className="standings-table__cell">{equipo.dg}</td>
      <td className="standings-table__cell standings-table__cell--points">{equipo.puntos}</td>
    </tr>
  );
}
