import type { TopScorer } from '../../topScorers/interfaces/topScorer.interface';

export interface TournamentSummaryData {
  name: string;
  code: string;
  organizer: string;
  startDate: string;
  endDate: string;
  playedMatches: number;
  upcomingMatches: number;
  topScorers: TopScorer[];
}
