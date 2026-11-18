
import { mockTeams } from "../../data/mockData";
import { readMockCollection } from "../../data/mockStore";
import type { TeamResponse } from "../interfaces/team.interface";


export const getTeamByTorneo = async( torneoId : number): Promise<TeamResponse[]> => {
    return readMockCollection("teams", mockTeams)
        .filter((team) => Number(team.torneo) === torneoId);
}