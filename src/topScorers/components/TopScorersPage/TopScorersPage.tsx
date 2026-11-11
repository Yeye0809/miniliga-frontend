import { topScorersMock } from '../../actions/topScorers';
import { TopScorersTable } from '../TopScorersTable/TopScorersTable';
import './TopScorersPage.css';

export function TopScorersPage() {
  return (
    <main className="content top-scorers-page">
      <header className="page-header">
        <div className="page-header-left">
          <button className="back-btn" aria-label="Volver">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
          </button>
          <h1>Goleadores</h1>
        </div>
      </header>

      <section className="top-scorers-panel" aria-label="Tabla de goleadores del torneo">
        <TopScorersTable scorers={topScorersMock} />
      </section>
    </main>
  );
}
