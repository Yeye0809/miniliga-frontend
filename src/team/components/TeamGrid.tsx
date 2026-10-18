
import { EquipoCard } from "./TeamCard";
import type { TeamResponse } from "../interfaces/team.interface";

interface TeamsProps{
    teams : TeamResponse[];
}

export function EquipoGrid( {teams} : TeamsProps){

    return (
        <div className="teams-grid">

            {
                teams.map(team => (
                    <EquipoCard key={team.id} team={team}/>
                ))
            }
           
        </div>
    )
}