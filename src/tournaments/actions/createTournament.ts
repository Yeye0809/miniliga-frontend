import { mockTournaments } from "../../data/mockData";
import { nextMockId, readMockCollection, writeMockCollection } from "../../data/mockStore";
import type { TournamentRequets, TournamentResponse } from "../interfaces/Tournament.response";


export const CreateTournament = async( tournament  : TournamentRequets ) : Promise<TournamentResponse > => {
    const tournaments = readMockCollection("tournaments", mockTournaments);
    const createdTournament: TournamentResponse = {
        ...tournament,
        id: nextMockId(tournaments),
        activo: true,
        estado: "ACTIVO",
    };
    writeMockCollection("tournaments", [...tournaments, createdTournament]);
    return createdTournament;
}