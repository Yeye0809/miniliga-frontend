import type { TournamentSummaryData } from '../interfaces/checkTournament.interface';

export const tournamentSummaryMock: TournamentSummaryData = {
  name: 'Copa Barrio Fútbol 7',
  code: '7X8J-9K2L',
  organizer: 'Fundación Deportivo Barrio',
  startDate: '12 de octubre de 2026',
  endDate: '28 de noviembre de 2026',
  playedMatches: 18,
  upcomingMatches: 7,
  topScorers: [
    { position: 1, player: 'Mateo Silva', team: 'Los del Barrio', goals: 12 },
    { position: 2, player: 'Daniel Rojas', team: 'Tigres FC', goals: 10 },
    { position: 3, player: 'Javier Mena', team: 'Real Cúcuta', goals: 9 },
    { position: 4, player: 'Santiago Lara', team: 'Furia FC', goals: 8 },
    { position: 5, player: 'Andrés Peña', team: 'La 10', goals: 7 },
  ],
};
