import { mockTournaments } from "../../data/mockData";
import { readMockCollection } from "../../data/mockStore";
import type { TournamentResponse } from "../../tournaments/interfaces/Tournament.response";

export const getTournamentById = async(torneoId: number): Promise<TournamentResponse> => {
    const tournament = readMockCollection("tournaments", mockTournaments)
        .find((item) => item.id === torneoId);

    if (!tournament) {
        throw new Error(`No se encontró el torneo ${torneoId}.`);
    }
    return tournament;
}