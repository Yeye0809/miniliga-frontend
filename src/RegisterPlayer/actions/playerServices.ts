import axios from "axios";
import type { PlayerRequest, PlayerResponse } from "../../player/interfaces/player-interface";



export const createPlayer = async (playerData : PlayerRequest) : Promise<PlayerResponse>=> {
    const response = await axios.post<PlayerResponse>('http://localhost:8080/api/jugadores', playerData );
    return response.data;
}

export const getPlayers = async ( torneoId : number ) : Promise<PlayerResponse[]> => {
    const response = await axios.get<PlayerResponse[]>(`http://localhost:8080/api/jugadores/${torneoId}`);
    return response.data
}