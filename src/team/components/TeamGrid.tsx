
import { EquipoCard } from "./TeamCard";
import type { TeamResponse } from "../interfaces/team.interface";
import type { PlayerResponse } from "../../player/interfaces/player-interface";

interface TeamsProps{
    teams : TeamResponse[];
    players: PlayerResponse[];
}

export function EquipoGrid( {teams, players} : TeamsProps){

    return (
        <div className="teams-grid">

            {
                teams.map(team => (
                    <EquipoCard key={team.id} team={team} playerCount={players.filter((player) => player.equipo === team.nombre).length}/>
                ))
            }
           
        </div>
    )
}