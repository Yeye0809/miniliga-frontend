import type { TeamResponse } from "../interfaces/team.interface"

interface TeamProps{
    team: TeamResponse;
}


export function EquipoCard({team} : TeamProps){
    return(
        <div className="team-card">
            <div className="team-logo">
            <svg viewBox="0 0 100 110" width="70" height="77">
                <path d="M50 4 L92 18 V52 C92 82 74 100 50 108 C26 100 8 82 8 52 V18 Z" fill="#1e3a5f" stroke="#16283f" strokeWidth="2"/>
                <path d="M50 12 L84 24 V52 C84 76 70 90 50 98 C30 90 16 76 16 52 V24 Z" fill="#26456b"/>
                <circle cx="50" cy="55" r="18" fill="#ffffff"/>
                <path d="M50 41 L58 47 L55 57 L45 57 L42 47 Z" fill="#1e3a5f"/>
                <path d="M50 41 L50 33" stroke="#1e3a5f" strokeWidth="2"/>
                <path d="M58 47 L65 43" stroke="#1e3a5f" strokeWidth="2"/>
                <path d="M55 57 L60 65" stroke="#1e3a5f" strokeWidth="2"/>
                <path d="M45 57 L40 65" stroke="#1e3a5f" strokeWidth="2"/>
                <path d="M42 47 L35 43" stroke="#1e3a5f" strokeWidth="2"/>
            </svg>
            </div>
            <h3 className="team-name">{team.nombre}</h3>
            <p className="team-group">{team.torneo}</p>
            <p className="team-players">0 jugadores</p>
        </div>
    )
}