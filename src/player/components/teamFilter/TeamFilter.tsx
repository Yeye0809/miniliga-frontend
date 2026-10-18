import './TeamFilter.css';

export const TeamFilter = () => {
  return (
    <div className="team-filter">
      <label className="team-filter__label" htmlFor="team-filter-select">
        Equipo
      </label>
      <div className="team-filter__select-wrapper">
        <select id="team-filter-select" className="team-filter__select" defaultValue="">
          <option value="">Todos los equipos</option>
          <option>Los Titanes</option>
          <option>Primer Equipo</option>
          <option>Barcelona</option>
          <option>Real Madrid</option>
          <option>Cucuta</option>
          <option>Bucara</option>
        </select>
        <svg className="team-filter__chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </div>
  )
}
