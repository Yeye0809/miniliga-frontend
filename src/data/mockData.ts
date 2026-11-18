import type { MatcheResponse } from "../matches/interface/matche-response";
import type { Partido } from "../matches/interface/types";
import type { PlayerResponse } from "../player/interfaces/player-interface";
import type { TeamResponse } from "../team/interfaces/team.interface";
import type { TournamentResponse } from "../tournaments/interfaces/Tournament.response";

export const mockTournaments: TournamentResponse[] = [
  {
    id: 1,
    nombre: "Copa Barrio Fútbol 7",
    descripcion: "Torneo de fútbol 7 con fase de grupos y eliminatorias.",
    fechaInicio: "2026-10-12",
    fechaFin: "2026-11-28",
    activo: true,
    estado: "ACTIVO",
  },
  {
    id: 2,
    nombre: "Liga Juvenil del Norte",
    descripcion: "Competencia juvenil para equipos de la zona norte.",
    fechaInicio: "2026-09-01",
    fechaFin: "2026-12-10",
    activo: true,
    estado: "ACTIVO",
  },
  {
    id: 3,
    nombre: "Copa de Verano",
    descripcion: "Edición anterior de la copa local.",
    fechaInicio: "2026-01-10",
    fechaFin: "2026-02-20",
    activo: false,
    estado: "FINALIZADO",
  },
];

export const mockTeams: TeamResponse[] = [
  { id: 1, nombre: "Los del Barrio", torneo: "1", entrenador: "Juan Pablo" },
  { id: 2, nombre: "Furia FC", torneo: "1", entrenador: "Carlos Rojas" },
  { id: 3, nombre: "Real Cúcuta", torneo: "1", entrenador: "Andrés Mena" },
  { id: 4, nombre: "Tigres FC", torneo: "1", entrenador: "Luis Silva" },
  { id: 5, nombre: "La 10", torneo: "1", entrenador: "Felipe Lara" },
  { id: 6, nombre: "Norte Unido", torneo: "2", entrenador: "María Torres" },
  { id: 7, nombre: "San Pedro", torneo: "2", entrenador: "Pedro Gómez" },
  { id: 8, nombre: "Leones FC", torneo: "2", entrenador: "Jorge Díaz" },
  { id: 9, nombre: "Atlético Norte", torneo: "3", entrenador: "Sofía Ruiz" },
];

export const mockPlayers: PlayerResponse[] = [
  { id: 1, nombre: "Mateo", apellido: "Silva", telefono: "3001234567", posicion: "DELANTERO", equipo: "Los del Barrio", goals: 12, shirtNumber: 9, yellowCards: 1, redCards: 0, torneoId: 1 },
  { id: 2, nombre: "Javier", apellido: "Mena", telefono: "3002345678", posicion: "MEDIOCAMPISTA", equipo: "Real Cúcuta", goals: 9, shirtNumber: 10, yellowCards: 2, redCards: 0, torneoId: 1 },
  { id: 3, nombre: "Santiago", apellido: "Lara", telefono: "3003456789", posicion: "DELANTERO", equipo: "Furia FC", goals: 8, shirtNumber: 11, yellowCards: 0, redCards: 0, torneoId: 1 },
  { id: 4, nombre: "Daniel", apellido: "Rojas", telefono: "3004567890", posicion: "PORTERO", equipo: "Tigres FC", goals: 1, shirtNumber: 1, yellowCards: 1, redCards: 0, torneoId: 1 },
  { id: 5, nombre: "Andrés", apellido: "Peña", telefono: "3005678901", posicion: "DEFENSA", equipo: "La 10", goals: 3, shirtNumber: 4, yellowCards: 2, redCards: 1, torneoId: 1 },
  { id: 6, nombre: "Camila", apellido: "Torres", telefono: "3006789012", posicion: "DELANTERO", equipo: "Norte Unido", goals: 7, shirtNumber: 7, yellowCards: 0, redCards: 0, torneoId: 2 },
  { id: 7, nombre: "David", apellido: "Gómez", telefono: "3007890123", posicion: "MEDIOCAMPISTA", equipo: "San Pedro", goals: 5, shirtNumber: 8, yellowCards: 1, redCards: 0, torneoId: 2 },
  { id: 8, nombre: "Nicolás", apellido: "Díaz", telefono: "3008901234", posicion: "DEFENSA", equipo: "Leones FC", goals: 2, shirtNumber: 3, yellowCards: 1, redCards: 0, torneoId: 2 },
];

export const mockMatches: Partido[] = [
  { id: 1, torneoId: 1, grupoId: "A", grupoNombre: "Grupo A", fase: "GRUPOS", local: { id: 1, nombre: "Los del Barrio", color: "#2673ee" }, visitante: { id: 2, nombre: "La 10", color: "#f0b900" }, fechaHora: "2026-10-12T14:00:00", golesLocal: 2, golesVisitante: 1, estado: "FINALIZADO" },
  { id: 2, torneoId: 1, grupoId: "A", grupoNombre: "Grupo A", fase: "GRUPOS", local: { id: 2, nombre: "Furia FC", color: "#ec174c" }, visitante: { id: 3, nombre: "Real Cúcuta", color: "#425a7c" }, fechaHora: "2026-11-20T16:00:00", estado: "PENDIENTE" },
  { id: 3, torneoId: 1, grupoId: "B", grupoNombre: "Grupo B", fase: "GRUPOS", local: { id: 4, nombre: "Tigres FC", color: "#eab308" }, visitante: { id: 1, nombre: "Los del Barrio", color: "#2673ee" }, fechaHora: "2026-11-22T14:00:00", estado: "PENDIENTE" },
  { id: 4, torneoId: 1, fase: "CUARTOS", local: { id: 1, nombre: "Los del Barrio", color: "#2673ee" }, visitante: { id: 4, nombre: "Tigres FC", color: "#eab308" }, fechaHora: "2026-11-24T15:00:00", estado: "PENDIENTE" },
  { id: 5, torneoId: 1, fase: "SEMIFINAL", local: { id: 5, nombre: "La 10", color: "#f0b900" }, visitante: { id: 2, nombre: "Furia FC", color: "#ec174c" }, fechaHora: "2026-10-28T17:00:00", golesLocal: 1, golesVisitante: 2, estado: "FINALIZADO" },
  { id: 6, torneoId: 2, grupoId: "A", grupoNombre: "Grupo A", fase: "GRUPOS", local: { id: 6, nombre: "Norte Unido", color: "#2673ee" }, visitante: { id: 7, nombre: "San Pedro", color: "#ec174c" }, fechaHora: "2026-11-22T15:00:00", estado: "PENDIENTE" },
  { id: 7, torneoId: 2, grupoId: "A", grupoNombre: "Grupo A", fase: "GRUPOS", local: { id: 8, nombre: "Leones FC", color: "#eab308" }, visitante: { id: 6, nombre: "Norte Unido", color: "#2673ee" }, fechaHora: "2026-11-24T16:00:00", estado: "PENDIENTE" },
];

export const toMatchResponse = (match: Partido): MatcheResponse => ({
  idPartido: Number(match.id),
  equipoA: match.local.nombre,
  equipoB: match.visitante.nombre,
  finalizado: match.estado === "FINALIZADO",
  fase: match.grupoNombre ?? match.fase,
  fecha: match.fechaHora,
});
