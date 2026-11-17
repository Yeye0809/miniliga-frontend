import type { TopScorer } from '../../interfaces/topScorer.interface';

interface TopScorerTableRowProps {
  scorer: TopScorer;
}

export function TopScorerTableRow({ scorer }: TopScorerTableRowProps) {
  const initials = `${scorer.nombre[0]}${scorer.apellido[0]}`.toUpperCase();

  return (
    <tr className="player-row">
      <td className="player-row__cell">
        <div className="player-row__name">
          <span className="player-row__avatar player-row__avatar--green">{initials}</span>
          <span>{scorer.nombre}</span>
        </div>
      </td>
      <td className="player-row__cell player-row__cell--secondary">{scorer.apellido}</td>
      <td className="player-row__cell player-row__cell--secondary">{scorer.equipo}</td>
      <td className="player-row__cell player-row__cell--number">{scorer.goles}</td>
    </tr>
  );
}
