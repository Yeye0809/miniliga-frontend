import type { TopScorer } from '../../interfaces/topScorer.interface';
import { TopScorerTableRow } from './TopScorerTableRow';
import '../../../player/components/PlayerTable/PlayerTable.css';
import '../../../player/components/PlayerRow/PlayerRow.css';
import './TopScorersTable.css';

interface TopScorersTableProps {
  scorers: TopScorer[];
}

export function TopScorersTable({ scorers }: TopScorersTableProps) {
  const topScorers = [...scorers]
    .sort((first, second) => second.goles - first.goles)
    .slice(0, 10);

  return (
    <section className="players-table top-scorers-table" aria-label="Listado de goleadores">
      <div className="players-table__scroll">
        <table className="players-table__table top-scorers-table__table">
          <thead className="players-table__head">
            <tr>
              <th className="players-table__heading players-table__heading--left">Nombre</th>
              <th className="players-table__heading players-table__heading--left">Apellido</th>
              <th className="players-table__heading players-table__heading--left">Equipo</th>
              <th className="players-table__heading">Goles</th>
            </tr>
          </thead>

          <tbody>
            {topScorers.map((scorer) => (
              <TopScorerTableRow
                key={`${scorer.nombre}-${scorer.apellido}-${scorer.equipo}`}
                scorer={scorer}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
