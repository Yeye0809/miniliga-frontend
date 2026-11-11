import axios from "axios"
import type { TeamRequest, TeamResponse } from "../interfaces/team.interface";





export const createTeam = async ( teamData : TeamRequest)  => {

    console.log(teamData.torneo)
    const response = await axios.post<TeamResponse>(`http://localhost:8080/api/equipo/${teamData.torneo}`, teamData);

    return response.data;
    
}
