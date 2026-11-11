import { useState } from 'react';
import './CheckTournamentSummary.css';
import type { Partido } from '../../../matches/interface/types';
import type { TournamentSummaryData } from '../../interfaces/checkTournament.interface';
import { PartidoProximoItem } from './PartidoProximoItem';
import { HistorialPartidoItem } from './HistorialPartidoItem';
import { TopScorersTable } from '../../../topScorers/components/TopScorersTable/TopScorersTable';

interface CheckTournamentSummaryProps {
  tournament: TournamentSummaryData;
}

const partidosProximos: Partido[] = [
  {
    id: 1,
    fase: 'GRUPOS',
    local: { id: 1, nombre: 'Los del Barrio' },
    visitante: { id: 2, nombre: 'Tigres FC' },
    fechaHora: '2026-10-12T18:00:00',
    estado: 'PENDIENTE',
  },
  {
    id: 2,
    fase: 'GRUPOS',
    local: { id: 3, nombre: 'Furia FC' },
    visitante: { id: 4, nombre: 'La 10' },
    fechaHora: '2026-10-14T20:30:00',
    estado: 'PENDIENTE',
  },
  {
    id: 3,
    fase: 'GRUPOS',
    local: { id: 5, nombre: 'Real Cúcuta' },
    visitante: { id: 6, nombre: 'Atlético Norte' },
    fechaHora: '2026-10-18T16:15:00',
    estado: 'PENDIENTE',
  },
];

const historialPartidos: Partido[] = [
  {
    id: 11,
    fase: 'GRUPOS',
    local: { id: 1, nombre: 'Los del Barrio' },
    visitante: { id: 2, nombre: 'Tigres FC' },
    fechaHora: '2026-10-12T18:00:00',
    golesLocal: 2,
    golesVisitante: 1,
    estado: 'FINALIZADO',
  },
  {
    id: 12,
    fase: 'GRUPOS',
    local: { id: 7, nombre: 'Real Cúcuta' },
    visitante: { id: 8, nombre: 'Furia FC' },
    fechaHora: '2026-10-15T17:00:00',
    golesLocal: 1,
    golesVisitante: 3,
    estado: 'FINALIZADO',
  },
  {
    id: 13,
    fase: 'GRUPOS',
    local: { id: 9, nombre: 'La 10' },
    visitante: { id: 10, nombre: 'Atlético Norte' },
    fechaHora: '2026-10-19T19:45:00',
    golesLocal: 2,
    golesVisitante: 0,
    estado: 'FINALIZADO',
  },
  {
    id: 14,
    fase: 'GRUPOS',
    local: { id: 1, nombre: 'Los del Barrio' },
    visitante: { id: 7, nombre: 'Real Cúcuta' },
    fechaHora: '2026-10-25T18:30:00',
    golesLocal: 3,
    golesVisitante: 2,
    estado: 'FINALIZADO',
  },
];

export function CheckTournamentSummary({ tournament }: CheckTournamentSummaryProps) {
  const [activeTab, setActiveTab] = useState<'partidos' | 'goleadores'>('partidos');

  return (
    <section className="summary-panel" aria-label="Resumen del torneo buscado">
      <div className="summary-header">
        <div>
          <p className="summary-badge">Torneo activo</p>
          <h2>{tournament.name}</h2>
        </div>
        <span className="summary-code">{tournament.code}</span>
      </div>

      <div className="summary-grid">
        <div className="summary-card">
          <span className="card-label">Organizador</span>
          <strong>{tournament.organizer}</strong>
        </div>
        <div className="summary-card">
          <span className="card-label">Fecha de inicio</span>
          <strong>{tournament.startDate}</strong>
        </div>
        <div className="summary-card">
          <span className="card-label">Fecha de fin</span>
          <strong>{tournament.endDate}</strong>
        </div>
        <div className="summary-card highlight">
          <span className="card-label">Partidos jugados</span>
          <strong>{tournament.playedMatches}</strong>
        </div>
      </div>

      <div className="details-grid">
        <div className="details-card details-card--compact">
          <h3>Próximos partidos</h3>
          <ul>
            {partidosProximos.map((partido) => (
              <PartidoProximoItem key={partido.id} partido={partido} />
            ))}
          </ul>
        </div>

        <div className="details-card details-card--tabbed">
          <div className="tab-buttons" role="tablist" aria-label="Ver partidos o goleadores">
            <button
              type="button"
              className={activeTab === 'partidos' ? 'tab-button active' : 'tab-button'}
              onClick={() => setActiveTab('partidos')}
            >
              Partidos
            </button>
            <button
              type="button"
              className={activeTab === 'goleadores' ? 'tab-button active' : 'tab-button'}
              onClick={() => setActiveTab('goleadores')}
            >
              Goleadores
            </button>
          </div>

          {activeTab === 'partidos' ? (
            <div className="tab-content">
              <h3>Historial de partidos</h3>
              <ul className="match-history-list">
                {historialPartidos.map((partido) => (
                  <HistorialPartidoItem key={partido.id} partido={partido} />
                ))}
              </ul>
            </div>
          ) : (
            <div className="tab-content">
              <h3>Tabla de goleadores</h3>
              <TopScorersTable scorers={tournament.topScorers} />
            </div>
          )}
        </div>
      </div>

      <div className="summary-footer">
        <div className="footer-stat">
          <span>Próximos partidos</span>
          <strong>{tournament.upcomingMatches}</strong>
        </div>
      </div>
    </section>
  );
}
