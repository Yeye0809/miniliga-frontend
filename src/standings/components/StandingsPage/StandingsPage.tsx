import { gruposStandingsMock } from '../../actions/standings';
import { StandingsTable } from '../StandingsTable/StandingsTable';
import './StandingsPage.css';

export function StandingsPage() {
  return (
    <main className="content standings-page">
      <header className="page-header">
        <div className="page-header-left">
          <button className="back-btn" aria-label="Volver">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
          </button>
          <h1>Tabla de posiciones</h1>
        </div>
      </header>

      <section className="standings-page__groups" aria-label="Tablas de posiciones por grupos">
        {gruposStandingsMock.map((grupo) => (
          <StandingsTable key={grupo.nombre} grupo={grupo} />
        ))}
      </section>
    </main>
  );
}
