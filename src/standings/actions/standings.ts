import type { GrupoPosicion } from '../interfaces/standings.interface';

export function ordenarEquiposGrupo(equipos: GrupoPosicion['equipos']) {
  return [...equipos].sort((a, b) => {
    if (b.puntos !== a.puntos) return b.puntos - a.puntos;
    if (b.dg !== a.dg) return b.dg - a.dg;
    if (b.gf !== a.gf) return b.gf - a.gf;
    return a.nombre.localeCompare(b.nombre);
  });
}

export const gruposStandingsMock: GrupoPosicion[] = [
  {
    nombre: 'Grupo A',
    equipos: ordenarEquiposGrupo([
      { nombre: 'Los del Barrio', pj: 3, g: 2, e: 1, p: 0, gf: 7, gc: 2, dg: 5, puntos: 7 },
      { nombre: 'Furia FC', pj: 3, g: 2, e: 0, p: 1, gf: 6, gc: 3, dg: 3, puntos: 6 },
      { nombre: 'Real Cúcuta', pj: 3, g: 1, e: 1, p: 1, gf: 4, gc: 5, dg: -1, puntos: 4 },
      { nombre: 'Atlético Norte', pj: 3, g: 0, e: 0, p: 3, gf: 1, gc: 8, dg: -7, puntos: 0 },
    ]),
  },
  {
    nombre: 'Grupo B',
    equipos: ordenarEquiposGrupo([
      { nombre: 'Tigres FC', pj: 3, g: 2, e: 1, p: 0, gf: 8, gc: 3, dg: 5, puntos: 7 },
      { nombre: 'La 10', pj: 3, g: 2, e: 0, p: 1, gf: 5, gc: 4, dg: 1, puntos: 6 },
      { nombre: 'Cruz Azul', pj: 3, g: 1, e: 1, p: 1, gf: 4, gc: 6, dg: -2, puntos: 4 },
      { nombre: 'Racing Barrial', pj: 3, g: 0, e: 0, p: 3, gf: 2, gc: 6, dg: -4, puntos: 0 },
    ]),
  },
  {
    nombre: 'Grupo C',
    equipos: ordenarEquiposGrupo([
      { nombre: 'Norte Unido', pj: 3, g: 2, e: 0, p: 1, gf: 6, gc: 4, dg: 2, puntos: 6 },
      { nombre: 'San Pedro', pj: 3, g: 1, e: 2, p: 0, gf: 5, gc: 3, dg: 2, puntos: 5 },
      { nombre: 'Leones FC', pj: 3, g: 1, e: 1, p: 1, gf: 4, gc: 5, dg: -1, puntos: 4 },
      { nombre: 'Bajo Norte', pj: 3, g: 0, e: 1, p: 2, gf: 2, gc: 5, dg: -3, puntos: 1 },
    ]),
  },
];
