import axios from "axios"
import type { TournamentResponse } from "../../tournaments/interfaces/Tournament.response";

export  const getTournamentById = async( torneoId : Number ) : Promise<TournamentResponse> => {
    const response = await axios.get<TournamentResponse>(`http://localhost:8080/api/torneo/${torneoId}`);

    return response.data;
}