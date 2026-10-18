
export interface TournamentResponse{
  id : number;
  nombre : string;
  fechaInicio : string;
  fechaFin : string;
  activo : boolean;
  descripcion: string;
}

export interface TournamentRequets{
  nombre : string;
  fechaInicio : string;
  fechaFin : string;
  descripcion: string;
}