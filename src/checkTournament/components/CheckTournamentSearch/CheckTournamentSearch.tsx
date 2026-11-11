import './CheckTournamentSearch.css';

export function CheckTournamentSearch() {
  return (
    <form className="check-tournament-form" aria-label="Buscar torneo">
      <input
        type="text"
        className="check-tournament-input"
        placeholder="Ingresa el código o nombre del torneo"
        aria-label="Código o nombre del torneo"
      />
      <button type="button" className="check-tournament-button">
        Buscar
      </button>
    </form>
  );
}
