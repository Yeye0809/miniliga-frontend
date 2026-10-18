import type { PlayerResponse } from '../../interfaces/player-interface';
import './PlayerRow.css'


const positionClass  = {
  PORTERO: 'player-row__position--goalkeeper',
  DEFENSA: 'player-row__position--defender',
  MEDIOCAMPISTA: 'player-row__position--midfielder',
  DELANTERO: 'player-row__position--forward',
};

interface PlayerProps {
  playerProps : PlayerResponse
}

export const PlayerRow = ( {playerProps}  : PlayerProps) => {

  const {
    nombre,
    apellido,
    telefono,
    posicion,
    equipo,
    goals,
    shirtNumber,
    yellowCards = 0,
    redCards = 0,
  } = playerProps;

  const initials = `${nombre[0]}${apellido[0]}`.toUpperCase();
  const yellowClass = yellowCards > 0 ? ' player-row__cell--yellow-active' : '';
  const redClass = redCards > 0 ? ' player-row__cell--red-active' : '';

  return (
    <tr className="player-row">
      <td className="player-row__cell">
        <div className="player-row__name">
          <span className={`player-row__avatar ${positionClass[posicion]}`}>
            {initials}
          </span>
          <span>{nombre}</span>
        </div>
      </td>
      <td className="player-row__cell player-row__cell--secondary">{apellido}</td>
      <td className="player-row__cell player-row__cell--secondary">{telefono}</td>
      <td className="player-row__cell">
        <span className={`player-row__position ${positionClass[posicion]}`}>{posicion}</span>
      </td>
      <td className="player-row__cell player-row__cell--equipo">{equipo}</td>
      <td className="player-row__cell player-row__cell--number">{goals ?? 0}</td>
      <td className="player-row__cell player-row__cell--number">{shirtNumber ?? '-'}</td>
      <td className={`player-row__cell player-row__cell--number${yellowClass}`}>{yellowCards}</td>
      <td className={`player-row__cell player-row__cell--number${redClass}`}>{redCards}</td>
      <td className="player-row__cell player-row__cell--actions">
        <button type="button" className="player-row__menu-button" aria-label="Acciones del jugador">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="5" r="1.6" />
            <circle cx="12" cy="12" r="1.6" />
            <circle cx="12" cy="19" r="1.6" />
          </svg>
        </button>
      </td>
    </tr>
  )
}
