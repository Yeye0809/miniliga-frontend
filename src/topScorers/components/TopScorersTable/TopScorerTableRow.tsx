import type { TopScorer } from '../../interfaces/topScorer.interface';

interface TopScorerTableRowProps {
  scorer: TopScorer;
}

export function TopScorerTableRow({ scorer }: TopScorerTableRowProps) {
  return (
    <tr>
      <td>{scorer.position}</td>
      <td>{scorer.player}</td>
      <td>{scorer.team}</td>
      <td>{scorer.goals}</td>
    </tr>
  );
}
