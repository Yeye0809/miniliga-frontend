import axios from "axios";
import type { TournamentResponse } from "../interfaces/Tournament.response";

export const getTournamentAll = async() : Promise<TournamentResponse[]>=>{
    const response = await axios.get<TournamentResponse[]>('http://localhost:8080/api/torneo');
    return response.data;
}