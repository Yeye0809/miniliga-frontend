import axios from "axios";
import type { TournamentRequets, TournamentResponse } from "../interfaces/Tournament.response";


export const CreateTournament = async( tournament  : TournamentRequets ) : Promise<TournamentResponse > => {
      
        const response = await axios.post<TournamentResponse>('http://localhost:8080/api/torneo', tournament);
        return response.data;
    

}