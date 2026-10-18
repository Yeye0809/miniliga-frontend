import { NavLink } from "react-router-dom";

export function TournamentsHeader(){
    return (
        <header className="page-header-tournaments">
            <h1 className="page-title-tournaments">
                Registrar torneo
            </h1>

            <NavLink to="/" className="btn btn-logout-tournament">
                <svg className="icon-logout" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 4H6.5A2.5 2.5 0 0 0 4 6.5v11A2.5 2.5 0 0 0 6.5 20H9" />
                    <path d="M13 8l4 4-4 4" />
                    <path d="M17 12H8.5" />
                </svg>
                Cerrar sesión
            </NavLink>
        </header>
    )
}