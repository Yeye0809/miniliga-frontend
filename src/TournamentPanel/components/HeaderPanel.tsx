
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTournament } from "../../context/useTournament";

interface Props{
  torneoId: string | undefined
}

export const HeaderPanel = ( {torneoId} : Props ) => {
    
  const {reloadTournament, tournament} = useTournament();
  const [loadError, setLoadError] = useState("");

      useEffect(()=>{
        void reloadTournament().catch((error: unknown) => {
          setLoadError(error instanceof Error ? error.message : "No se pudo cargar la información del torneo.");
        });
      },[reloadTournament, torneoId]);

  const estado = tournament
    ? tournament.estado ?? (tournament.activo ? "ACTIVO" : "FINALIZADO")
    : null;
  const statusLabels = {
    ACTIVO: "En curso",
    PAUSADO: "En pausa",
    FINALIZADO: "Finalizado",
  } as const;

  return (
    <header className="page-header">
      <div className="header-title">
        <div className="title-row">
          <h1>{ tournament?.nombre }</h1>
          {estado && (
            <span className={`badge-live badge-live--${estado.toLowerCase()}`}>
              {statusLabels[estado]}
            </span>
          )}
        </div>
        <p className="subtitle">{ tournament?.descripcion }</p>
        {loadError && <p role="alert">{loadError}</p>}
      </div>

      <div className="header-actions">
        <button className="icon-btn" aria-label="Notificaciones">
          <svg viewBox="0 0 24 24" fill="none" width="20" height="20"><path d="M6 10a6 6 0 0 1 12 0c0 4 1.4 5.5 1.4 5.5H4.6S6 14 6 10Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="M10 19a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.6"/></svg>
          <span className="notif-dot"></span>
        </button>
        <NavLink to="/torneos" className="btn btn-outline">
          <svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M2.5 12s3.4-6.5 9.5-6.5S21.5 12 21.5 12s-3.4 6.5-9.5 6.5S2.5 12 2.5 12Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.6"/></svg>
          Salir
        </NavLink>
      </div>
    </header>
  )
}
