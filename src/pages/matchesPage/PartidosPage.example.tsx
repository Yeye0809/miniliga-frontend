// Ejemplo opcional para probar visualmente la página. Reemplaza estos datos por los del backend.

import type { Grupo, Partido } from "../../matches/interface/types";
import PartidosPage from "./MatchesPage";


const grupos: Grupo[] = [
  { id: "A", nombre: "Grupo A" }, { id: "B", nombre: "Grupo B" },
  { id: "C", nombre: "Grupo C" }, { id: "D", nombre: "Grupo D" },
];
const partidos: Partido[] = [
  { id: 1, grupoId: "A", grupoNombre: "Grupo A", fase: "GRUPOS", local: { id: 1, nombre: "Los del Barrio", color: "#2673ee" }, visitante: { id: 2, nombre: "La 10", color: "#f0b900" }, fechaHora: "2026-10-12T14:00:00", golesLocal: 2, golesVisitante: 1, estado: "FINALIZADO" },
  { id: 2, grupoId: "A", grupoNombre: "Grupo A", fase: "GRUPOS", local: { id: 3, nombre: "Furia FC", color: "#ec174c" }, visitante: { id: 4, nombre: "Real Cúcuta", color: "#425a7c" }, fechaHora: "2026-10-20T16:00:00", estado: "PENDIENTE" },
  { id: 3, grupoId: "B", grupoNombre: "Grupo B", fase: "GRUPOS", local: { id: 5, nombre: "Tigres FC", color: "#eab308" }, visitante: { id: 6, nombre: "Atlético Norte", color: "#ec174c" }, fechaHora: "2026-10-13T14:00:00", golesLocal: 1, golesVisitante: 0, estado: "PENDIENTE" },
  { id: 4, fase: "CUARTOS", local: { id: 1, nombre: "Los del Barrio", color: "#2673ee" }, visitante: { id: 5, nombre: "Tigres FC", color: "#eab308" }, fechaHora: "2026-10-25T15:00:00", estado: "PENDIENTE" },
  { id: 5, fase: "SEMIFINAL", local: { id: 2, nombre: "La 10", color: "#f0b900" }, visitante: { id: 3, nombre: "Furia FC", color: "#ec174c" }, fechaHora: "2026-10-28T17:00:00", golesLocal: 1, golesVisitante: 2, estado: "FINALIZADO" },
];

export default function PartidosPageExample() {
  return <PartidosPage nombreTorneo="Copa Barrio Fútbol 7" grupos={grupos} partidos={partidos} />;
}
