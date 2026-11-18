
export type TournamentStatus = 'ACTIVO' | 'PAUSADO' | 'FINALIZADO';

export interface TournamentResponse{
  id : number;
  nombre : string;
  fechaInicio : string;
  fechaFin : string;
  activo : boolean;
  estado?: TournamentStatus;
  descripcion: string;
}

export interface TournamentRequets{
  nombre : string;
  fechaInicio : string;
  fechaFin : string;
  descripcion: string;
}

export interface TournamentUpdateRequest extends TournamentRequets {
  estado: TournamentStatus;
}