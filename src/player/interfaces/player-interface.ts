export type Position ='PORTERO' | 'DEFENSA' | 'MEDIOCAMPISTA' | 'DELANTERO';
export interface PlayerResponse{
    id: number;
    nombre: string;
    apellido: string;
    telefono: string;
    posicion: Position;
    equipo: string;
    goals ?: number;
    shirtNumber ?: number;
    yellowCards ?: number;
    redCards ?: number;

}

export interface PlayerRequest{
    nombre: string;
    apellido: string;
    telefono: string;
    posicion: Position | '';
    equipo: string;
    shirtNumber : string;
}