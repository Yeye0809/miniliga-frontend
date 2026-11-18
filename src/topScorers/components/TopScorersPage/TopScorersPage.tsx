import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTournament } from "../../../context/useTournament";
import { getPlayers } from "../../../RegisterPlayer/actions/playerServices";
import type { TopScorer } from "../../interfaces/topScorer.interface";
import { TopScorersTable } from '../TopScorersTable/TopScorersTable';
import './TopScorersPage.css';

export function TopScorersPage() {
  const { torneoId } = useTournament();
  const navigate = useNavigate();
  const [scorers, setScorers] = useState<TopScorer[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getPlayers(torneoId).then((players) => {
      setScorers(players
        .filter((player) => (player.goals ?? 0) > 0)
        .map(({ nombre, apellido, equipo, goals }) => ({
          nombre,
          apellido,
          equipo,
          goles: goals ?? 0,
        }))
        .sort((a, b) => b.goles - a.goles));
    }).catch((loadError: unknown) => {
      setError(loadError instanceof Error ? loadError.message : "No se pudieron cargar los goleadores.");
    });
  }, [torneoId]);

  return (
    <main className="content top-scorers-page">
      {error && <p role="alert">{error}</p>}
      <header className="page-header">
        <div className="page-header-left">
          <button className="back-btn" aria-label="Volver al panel" onClick={() => navigate("..")}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
          </button>
          <h1>Goleadores</h1>
        </div>
      </header>

      <section className="top-scorers-panel" aria-label="Tabla de goleadores del torneo">
        <TopScorersTable scorers={scorers} />
      </section>
    </main>
  );
}
