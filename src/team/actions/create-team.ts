import axios from "axios"
import type { TeamRequest } from "../interfaces/team.interface";
import type { TeamResponse } from "../interfaces/team.response";




export const createTeam = async ( teamData : TeamRequest)  => {

    console.log(teamData.torneo)
    const response = await axios.post<TeamResponse>(`http://localhost:8080/api/equipo/${teamData.torneo}`, teamData);

    return response.data;
    
}
