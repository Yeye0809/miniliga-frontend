import { mockTeams, mockTournaments } from "../../data/mockData";
import { nextMockId, readMockCollection, writeMockCollection } from "../../data/mockStore";
import type { TeamRequest, TeamResponse } from "../interfaces/team.interface";


export const createTeam = async ( teamData : TeamRequest)  => {
    const teams = readMockCollection("teams", mockTeams);
    const tournament = readMockCollection("tournaments", mockTournaments)
        .find((item) => item.id === teamData.torneo);
    if (!tournament) {
        throw new Error("No se puede crear un equipo para un torneo inexistente.");
    }
    if (teams.some((team) =>
        Number(team.torneo) === teamData.torneo
        && team.nombre.toLowerCase() === teamData.nombre.trim().toLowerCase()
    )) {
        throw new Error("Ya existe un equipo con ese nombre en este torneo.");
    }

    const createdTeam: TeamResponse = {
        id: nextMockId(teams),
        nombre: teamData.nombre.trim(),
        torneo: String(teamData.torneo),
    };
    writeMockCollection("teams", [...teams, createdTeam]);
    return createdTeam;
}
