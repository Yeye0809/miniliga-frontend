import { mockTournaments } from "../../data/mockData";
import { readMockCollection } from "../../data/mockStore";
import type { TournamentResponse } from "../interfaces/Tournament.response";

export const getTournamentAll = async() : Promise<TournamentResponse[]>=>{
    return readMockCollection("tournaments", mockTournaments);
}