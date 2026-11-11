import { NavBar } from '../../../home/components/navbar/NavBar';
import { CheckTournamentSearch } from '../CheckTournamentSearch/CheckTournamentSearch';
import { CheckTournamentSummary } from '../CheckTournamentSummary/CheckTournamentSummary';
import { tournamentSummaryMock } from '../../actions/checkTournament';
import './CheckTournamentPage.css';

export function CheckTournamentPage() {
  return (
    <div className="check-tournament-page">
      <NavBar />

      <main className="check-tournament-content">
        <p className="check-tournament-kicker">Consulta tu torneo</p>
        <h1 className="check-tournament-title">
          Encuentra tu competencia y revisa su resumen completo
        </h1>

        <CheckTournamentSearch />

        <CheckTournamentSummary tournament={tournamentSummaryMock} />
      </main>
    </div>
  );
}
