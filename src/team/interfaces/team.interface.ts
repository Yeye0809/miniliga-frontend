
export interface TeamResponse {
    id:         number;
    nombre:     string;
    torneo:     string;
    entrenador?: string;
    jugadores?:  string[];
}


export interface TeamRequest {
    nombre : string;
    torneo: number;
}