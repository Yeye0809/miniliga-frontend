import { useRef, useState, type ReactNode } from "react"
import type { PlayerResponse } from "../player/interfaces/player-interface";
import type { TeamResponse } from "../team/interfaces/team.interface";
import { getTeamByTorneo } from "../team/actions/get-team-by-touenament";
import { getPlayers } from "../RegisterPlayer/actions/playerServices";
import { TournamenContext } from "./TournamentContext";
import { getTournamentById } from "../TournamentPanel/actions/getTournamentById";
import type { TournamentResponse } from "../tournaments/interfaces/Tournament.response";





interface TournamentProviderProps{
    children : ReactNode;
    torneoId : number;
}



export const TournamentProvider = ({children, torneoId} : TournamentProviderProps) => {

    const [players, setPlayers] = useState<PlayerResponse[]>([]);
    const [teams, setTeams] = useState<TeamResponse[]>([]);
    const [tournament, setTournament] = useState<TournamentResponse | null>(null);

    const teamsCache = useRef<Record<string, TeamResponse[]>>({});
    const playersCache = useRef<Record<string, PlayerResponse[]>>({});

    const loadTournament = async() => {
        const data = await getTournamentById(torneoId);
        setTournament(data);
        console.log(data);
    }

    const loadTeams = async() => {  

        if( teamsCache.current['teams'] ){
            setTeams(teamsCache.current['teams']);
            console.log('equipos en cache')
            return;
        }             

        const data = await getTeamByTorneo(Number(torneoId));          
        setTeams(data);
        teamsCache.current['teams'] = data;
        console.log('cargando equipos de DB');
    }

    const loadPlayers = async () => {

        if( playersCache.current['players'] ){
           setPlayers(playersCache.current['players']);
           console.log('jugadores en cache');  
           return;
        }

        const data = await getPlayers(torneoId);
        setPlayers(data);
        playersCache.current['players'] = data;
        console.log('cargandi jugadores de DB');
    }

  return (
    <TournamenContext.Provider value={{
        players,
        teams,
        torneoId,
        tournament,
        setPlayers,
        setTeams,
        setTournament,
        reLoadTeams : loadTeams,
        reLoadPlayers : loadPlayers,
        reloadTournament : loadTournament,
    }}>
        {children}
    </TournamenContext.Provider>
  )
}


