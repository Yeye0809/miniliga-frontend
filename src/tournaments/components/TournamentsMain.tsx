import { useEffect, useState } from "react"
import { FormTournament } from "./FormTournament"
import { TournamentBracket } from "./TournamentBracket"
import type { TournamentResponse } from "../interfaces/Tournament.response"
import { getTournamentAll } from "../actions/get-tournament-all"


export const TournamentsMain = () => {

    const [tournaments, setTournaments] = useState<TournamentResponse[]>([]);

    useEffect(() => {
      const loadTournament = async ()=>{
        const data = await getTournamentAll();
        setTournaments(data);
      }

      loadTournament();
    
    }, [])   



  return (
    <main className="page-content">
      
        <section className="card card-form">
           <FormTournament onTournamentCreate={setTournaments}/>
        </section>

        <section className="card card-table">
            <TournamentBracket tournaments={tournaments}/>
        </section>

    </main>
  )
}
