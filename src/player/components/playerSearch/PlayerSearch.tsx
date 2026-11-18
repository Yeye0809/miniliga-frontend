import './PlayerSearch.css'

interface PlayerSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const PlayerSearch = ({ value, onChange }: PlayerSearchProps) => {
  return (
    <div className="player-search">
      <svg className="player-search__icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
      <input
        type="search"
        className="player-search__input"
        placeholder="Buscar jugador..."
        aria-label="Buscar jugador"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}
