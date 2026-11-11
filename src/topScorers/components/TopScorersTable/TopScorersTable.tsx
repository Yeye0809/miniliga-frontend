import type { TopScorer } from '../../interfaces/topScorer.interface';
import { TopScorerTableRow } from './TopScorerTableRow';
import './TopScorersTable.css';

interface TopScorersTableProps {
  scorers: TopScorer[];
}

export function TopScorersTable({ scorers }: TopScorersTableProps) {
  return (
    <div className="top-scorers-table-wrapper">
      <table className="top-scorers-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Jugador</th>
            <th>Equipo</th>
            <th>Goles</th>
          </tr>
        </thead>

        <tbody>
          {scorers.map((scorer) => (
            <TopScorerTableRow key={scorer.position} scorer={scorer} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
