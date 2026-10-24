export type EstadoPartido = "PENDIENTE" | "FINALIZADO" | "EN_JUEGO";
export type FasePartido = "GRUPOS" | "OCTAVOS" | "CUARTOS" | "SEMIFINAL" | "FINAL";

export interface EquipoPartido {
  id: number | string;
  nombre: string;
  color?: string;
  escudoUrl?: string | null;
}

export interface Partido {
  id: number | string;
  grupoId?: number | string | null;
  grupoNombre?: string | null;
  fase: FasePartido;
  local: EquipoPartido;
  visitante: EquipoPartido;
  fechaHora: string;
  golesLocal?: number | null;
  golesVisitante?: number | null;
  estado: EstadoPartido;
}

export interface Grupo {
  id: number | string;
  nombre: string;
}
