
import axios from "axios"; 

import type { TeamResponse } from "../interfaces/team.response";

export const getTeamByTorneo = async( torneoId : number): Promise<TeamResponse[]> => {

    const response = await axios.get<TeamResponse[]>(`http://localhost:8080/api/equipo/${torneoId}/equipos`);

    return response.data;
}