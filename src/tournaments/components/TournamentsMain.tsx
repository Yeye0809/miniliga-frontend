import { useEffect, useState } from "react"
import { FormTournament } from "./FormTournament"
import { TournamentBracket } from "./TournamentBracket"
import type { TournamentResponse } from "../interfaces/Tournament.response"
import { getTournamentAll } from "../actions/get-tournament-all"


export const TournamentsMain = () => {

    const [tournaments, setTournaments] = useState<TournamentResponse[]>([]);
    const [loadError, setLoadError] = useState("");

    useEffect(() => {
      getTournamentAll()
        .then(setTournaments)
        .catch((error: unknown) => {
          setLoadError(error instanceof Error ? error.message : "No se pudieron cargar los torneos.");
        });
    
    }, [])   



  return (
    <main className="page-content">
      
        <section className="card card-form">
           <FormTournament onTournamentCreate={setTournaments}/>
        </section>
        {loadError && <p role="alert">{loadError}</p>}

        <section className="card card-table">
            <TournamentBracket tournaments={tournaments}/>
        </section>

    </main>
  )
}
