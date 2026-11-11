export interface TopScorer {
  position: number;
  player: string;
  team: string;
  goals: number;
}

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
