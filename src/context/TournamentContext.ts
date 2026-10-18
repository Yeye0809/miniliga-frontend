import { createContext } from "react";
import type { PlayerResponse } from "../player/interfaces/player-interface";
import type { TeamResponse } from "../team/interfaces/team.interface";
import type { TournamentResponse } from "../tournaments/interfaces/Tournament.response";

interface TournamentContextProps{
    players : PlayerResponse[];
    teams : TeamResponse[];
    torneoId : number;
    tournament : TournamentResponse | null;
    //teamsCache: React.MutableRefObject<Record<string, TeamResponse[]>>;

    setPlayers : React.Dispatch<React.SetStateAction<PlayerResponse[]>>;
    setTeams : React.Dispatch<React.SetStateAction<TeamResponse[]>>;
    setTournament : React.Dispatch<React.SetStateAction<TournamentResponse | null>>;

    reLoadTeams : () => void;
    reLoadPlayers : () => void;
    reloadTournament : ()=> void;
}

export const TournamenContext = createContext({} as TournamentContextProps);