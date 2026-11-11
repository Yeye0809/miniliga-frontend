export interface EquipoPosicion {
  nombre: string;
  pj: number;
  g: number;
  e: number;
  p: number;
  gf: number;
  gc: number;
  dg: number;
  puntos: number;
}

export interface GrupoPosicion {
  nombre: string;
  equipos: EquipoPosicion[];
}
