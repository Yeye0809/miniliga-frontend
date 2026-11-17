import type { TournamentSummaryData } from '../interfaces/checkTournament.interface';
import { topScorersMock } from '../../topScorers/actions/topScorers';

export const tournamentSummaryMock: TournamentSummaryData = {
  name: 'Copa Barrio Fútbol 7',
  code: '7X8J-9K2L',
  organizer: 'Fundación Deportivo Barrio',
  startDate: '12 de octubre de 2026',
  endDate: '28 de noviembre de 2026',
  playedMatches: 18,
  upcomingMatches: 7,
  topScorers: topScorersMock,
};
