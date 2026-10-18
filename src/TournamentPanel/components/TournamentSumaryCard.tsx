

export const TournamentSumaryCard = () => {
  return (
      <div className="card info-card">
        <div className="card-header">
          <h2>Información del torneo</h2>
        </div>

        <ul className="info-list">
          <li className="info-row">
            <svg className="info-icon" viewBox="0 0 24 24" fill="none"><path d="M12 2 20 5.5V11c0 5.2-3.6 9-8 10.5-4.4-1.5-8-5.3-8-10.5V5.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
            <div>
              <p className="info-label">Formato</p>
              <p className="info-value">Fase de grupos + Eliminación</p>
            </div>
          </li>
          <li className="info-row">
            <svg className="info-icon" viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M4 9.5h16M8 3v3M16 3v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
            <div>
              <p className="info-label">Inicio</p>
              <p className="info-value">10 de Mayo, 2024</p>
            </div>
          </li>
          <li className="info-row">
            <svg className="info-icon" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.3" stroke="currentColor" strokeWidth="1.6"/><path d="M5 20c0-3.6 3.1-6.3 7-6.3s7 2.7 7 6.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
            <div>
              <p className="info-label">Organizador</p>
              <p className="info-value">Juan Pablo</p>
            </div>
          </li>
          <li className="info-row">
            <svg className="info-icon" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6"/><path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><circle cx="17" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.6"/><path d="M15.5 19c0-2.3 1.8-4 3.8-4s3.7 1.2 4.2 3.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
            <div>
              <p className="info-label">Equipos</p>
              <p className="info-value">16</p>
            </div>
          </li>
        </ul>

        <button className="btn btn-primary btn-full">Gestionar torneo</button>
      </div>
  )
}
