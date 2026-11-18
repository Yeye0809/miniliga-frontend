import './TeamFilter.css';
import type { TeamResponse } from "../../../team/interfaces/team.interface";

interface TeamFilterProps {
  teams: TeamResponse[];
  value: string;
  onChange: (value: string) => void;
}

export const TeamFilter = ({ teams, value, onChange }: TeamFilterProps) => {
  return (
    <div className="team-filter">
      <label className="team-filter__label" htmlFor="team-filter-select">
        Equipo
      </label>
      <div className="team-filter__select-wrapper">
        <select id="team-filter-select" className="team-filter__select" value={value} onChange={(event) => onChange(event.target.value)}>
          <option value="">Todos los equipos</option>
          {teams.map((team) => <option key={team.id} value={team.nombre}>{team.nombre}</option>)}
        </select>
        <svg className="team-filter__chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </div>
  )
}
