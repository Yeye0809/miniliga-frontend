
interface StatsCardsProps {
  teamsCount: number;
  matchesPlayed: number;
  goalsCount: number;
  playersCount: number;
}

export const StatsCards = ({ teamsCount, matchesPlayed, goalsCount, playersCount }: StatsCardsProps) => {
  return (
    <section className="stats-grid">
      <div className="stat-card">
        <p className="stat-number">{teamsCount}</p>
        <p className="stat-label">Equipos</p>
      </div>
      <div className="stat-card">
        <p className="stat-number">{matchesPlayed}</p>
        <p className="stat-label">Partidos jugados</p>
      </div>
      <div className="stat-card">
        <p className="stat-number">{goalsCount}</p>
        <p className="stat-label">Goles anotados</p>
      </div>
      <div className="stat-card">
        <p className="stat-number">{playersCount}</p>
        <p className="stat-label">Jugadores</p>
      </div>
    </section>
  )
}
