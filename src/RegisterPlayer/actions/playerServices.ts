import { mockPlayers, mockTeams } from "../../data/mockData";
import { nextMockId, readMockCollection, writeMockCollection } from "../../data/mockStore";
import type { PlayerRequest, PlayerResponse, Position } from "../../player/interfaces/player-interface";



export const createPlayer = async (playerData : PlayerRequest) : Promise<PlayerResponse>=> {
    const players = readMockCollection("players", mockPlayers);
    const team = readMockCollection("teams", mockTeams).find((candidate) =>
        candidate.nombre === playerData.equipo
        && Number(candidate.torneo) === playerData.torneoId,
    );
    if (!team) {
        throw new Error("Selecciona un equipo perteneciente a este torneo.");
    }
    if (!playerData.nombre.trim() || !playerData.apellido.trim() || !playerData.telefono.trim()) {
        throw new Error("Completa el nombre, apellido y teléfono del jugador.");
    }
    if (!playerData.posicion) {
        throw new Error("Selecciona la posición del jugador.");
    }

    const positionByLabel: Record<string, Position> = {
        PORTERO: "PORTERO",
        DEFENSA: "DEFENSA",
        MEDIOCAMPISTA: "MEDIOCAMPISTA",
        DELANTERO: "DELANTERO",
    };
    const position = positionByLabel[playerData.posicion.toUpperCase()];
    if (!position) {
        throw new Error("Selecciona una posición válida.");
    }

    const player: PlayerResponse = {
        id: nextMockId(players),
        nombre: playerData.nombre.trim(),
        apellido: playerData.apellido.trim(),
        telefono: playerData.telefono.trim(),
        posicion: position,
        equipo: team.nombre,
        goals: 0,
        shirtNumber: Number(playerData.shirtNumber) || undefined,
        yellowCards: 0,
        redCards: 0,
        torneoId: playerData.torneoId,
    };
    writeMockCollection("players", [...players, player]);
    return player;
}

export const getPlayers = async ( torneoId : number ) : Promise<PlayerResponse[]> => {
    return readMockCollection("players", mockPlayers)
        .filter((player) => player.torneoId === torneoId);
}