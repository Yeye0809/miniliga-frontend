import { useParams } from "react-router-dom";
import { MatchesCard } from "../../TournamentPanel/components/MatchesCard";
import { ReminderCard } from "../../TournamentPanel/components/ReminderCard";
import { StatsCards } from "../../TournamentPanel/components/StatsCards";
import { TournamentSumaryCard } from "../../TournamentPanel/components/TournamentSumaryCard";
import { useEffect, useState } from "react";
import { getUpcomingMatches } from "../../matches/actions/getUpcomingMatches";
import type { MatcheResponse } from "../../matches/interface/matche-response";

import './TournamentPanel.css';

export const TournamentPanelPage = () => {

  const {torneoId} = useParams();
  const [matches, setMatches] = useState<MatcheResponse[]>([]);
  
  useEffect(()=>{

    const loadData =  async() => {      
      const matchesData = await getUpcomingMatches();      
      setMatches(matchesData);
    }
    
    loadData();
  }, [torneoId]);

  return ( 
    
    <main className="content">
        <StatsCards />
        <section className="two-col">
          <MatchesCard  matches={matches}/>
          <TournamentSumaryCard />
        </section>
        <ReminderCard />
    </main>
  )
}
