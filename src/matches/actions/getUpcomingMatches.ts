import axios from "axios";
import type { MatcheResponse } from "../interface/matche-response";

export const getUpcomingMatches = async() : Promise<MatcheResponse[]> => {
    const response = await axios.get<MatcheResponse[]>('http://localhost:8080/api/partido/proximos/1');
    return response.data;
}