import { useParams } from "react-router-dom";
import { MatchesCard } from "../../TournamentPanel/components/MatchesCard";
import { ReminderCard } from "../../TournamentPanel/components/ReminderCard";
import { StatsCards } from "../../TournamentPanel/components/StatsCards";
import { TournamentSumaryCard } from "../../TournamentPanel/components/TournamentSumaryCard";
import { useEffect, useState } from "react";
import { getTournamentMatches } from "../../matches/actions/getUpcomingMatches";
import { toMatchResponse } from "../../data/mockData";
import type { MatcheResponse } from "../../matches/interface/matche-response";
import type { Partido } from "../../matches/interface/types";
import { useTournament } from "../../context/useTournament";

import './TournamentPanel.css';

export const TournamentPanelPage = () => {

  const {torneoId} = useParams();
  const [matches, setMatches] = useState<MatcheResponse[]>([]);
  const [allMatches, setAllMatches] = useState<Partido[]>([]);
  const [error, setError] = useState("");
  const { teams, players, reLoadTeams, reLoadPlayers } = useTournament();
  
  useEffect(()=>{
    const loadData = async() => {
      try {
        const tournamentId = Number(torneoId);
        const matchesData = await getTournamentMatches(tournamentId);
        setAllMatches(matchesData);
        setMatches(matchesData.filter((match) => match.estado !== "FINALIZADO").map(toMatchResponse));
        await Promise.all([reLoadTeams(), reLoadPlayers()]);
        setError("");
      } catch (loadError) {
        setError(loadError instanceof Error ? loadError.message : "No se pudo cargar el panel.");
      }
    }
    void loadData();
  }, [torneoId, reLoadTeams, reLoadPlayers]);

  const goals = players.reduce((total, player) => total + (player.goals ?? 0), 0);
  const playedMatches = allMatches.filter((match) => match.estado === "FINALIZADO").length;

  return ( 
    
    <main className="content">
        {error && <p role="alert">{error}</p>}
        <StatsCards teamsCount={teams.length} matchesPlayed={playedMatches} goalsCount={goals} playersCount={players.length} />
        <section className="two-col">
          <MatchesCard  matches={matches}/>
          <TournamentSumaryCard teamCount={teams.length} />
        </section>
        <ReminderCard />
    </main>
  )
}
