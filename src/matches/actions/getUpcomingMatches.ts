import { mockMatches, toMatchResponse } from "../../data/mockData";
import { readMockCollection } from "../../data/mockStore";
import type { Partido } from "../interface/types";
import type { MatcheResponse } from "../interface/matche-response";

export const getTournamentMatches = async(torneoId: number): Promise<Partido[]> => {
    return readMockCollection("matches", mockMatches)
        .filter((match) => match.torneoId === torneoId);
};

export const getUpcomingMatches = async(torneoId = 1): Promise<MatcheResponse[]> => {
    const matches = await getTournamentMatches(torneoId);
    return matches
        .filter((match) => match.estado !== "FINALIZADO")
        .map(toMatchResponse);
}