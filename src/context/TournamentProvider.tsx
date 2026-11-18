import { useCallback, useState, type ReactNode } from "react"
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

    const loadTournament = useCallback(async() => {
        const data = await getTournamentById(torneoId);
        setTournament(data);
    }, [torneoId]);

    const loadTeams = useCallback(async() => {
        const data = await getTeamByTorneo(torneoId);
        setTeams(data);
    }, [torneoId]);

    const loadPlayers = useCallback(async() => {
        const data = await getPlayers(torneoId);
        setPlayers(data);
    }, [torneoId]);

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


