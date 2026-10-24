
import { NavLink } from 'react-router-dom';
import './sideBar.css';

export function SideBar(){
    return(
        <div>
            <aside className="sidebar" id="sidebar">
            <div className="brand">
            <svg className="brand-logo" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M24 2 L44 10 V22 C44 34 36 42 24 46 C12 42 4 34 4 22 V10 Z" fill="#2EDB5B"/>
                <path d="M24 6 L40 12.5 V22 C40 32 33 39 24 42.3 C15 39 8 32 8 22 V12.5 Z" fill="#FFFFFF"/>
                <circle cx="24" cy="21" r="8" fill="none" stroke="#2EDB5B" strokeWidth="1.6"/>
                <path d="M24 15 L28.2 18 L26.6 22.8 H21.4 L19.8 18 Z" fill="#2EDB5B"/>
            </svg>
            <span className="brand-name">MINILIGA</span>
            </div>

            <nav className="nav-menu">
                
                <NavLink to='.' end className={ ({isActive}) => isActive ? "nav-item active" : "nav-item" }>
                    <svg className="nav-icon" viewBox="0 0 24 24" fill="none"><path d="M4 11.5 12 4l8 7.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 10v9a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span>Panel</span>
                </NavLink>
            
            <a href="#" className="nav-item">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none"><rect x="4" y="13" width="4" height="7" rx="1" stroke="currentColor" strokeWidth="1.7"/><rect x="10" y="9" width="4" height="11" rx="1" stroke="currentColor" strokeWidth="1.7"/><rect x="16" y="5" width="4" height="15" rx="1" stroke="currentColor" strokeWidth="1.7"/></svg>
                <span>Tabla de posiciones</span>
            </a>
            <NavLink to="partidos" className="nav-item">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7"/><path d="M12 7.2 13.7 10l3 .4-2.2 2.1.5 3-2.8-1.5L9.4 15.5l.5-3-2.2-2.1 3-.4Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>
                <span>Partidos</span>
            </NavLink>
            <NavLink to='equipos' className="nav-item">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.7"/><path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/><circle cx="17" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.7"/><path d="M15.5 19c0-2.3 1.8-4 3.8-4s3.7 1.2 4.2 3.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
                <span>Equipos</span>
            </NavLink>
            
            <a className="nav-item">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none"><path d="M7 4h10v3a5 5 0 0 1-5 5 5 5 0 0 1-5-5V4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M7 5H4v1a4 4 0 0 0 4 4M17 5h3v1a4 4 0 0 1-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/><path d="M12 12v3m-3 3h6m-6 0v2h6v-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Goleadores</span>
            </a>
            <NavLink to="jugadores" className="nav-item">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.3" stroke="currentColor" strokeWidth="1.7"/><path d="M5 20c0-3.6 3.1-6.3 7-6.3s7 2.7 7 6.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
                <span>Jugadores</span>
            </NavLink>
            <a href="#" className="nav-item">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7"/><path d="M12 11v5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/><circle cx="12" cy="8" r="0.9" fill="currentColor"/></svg>
                <span>Información</span>
            </a>
            <a href="#" className="nav-item">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7"/><path d="M19.4 13.5c.1-.5.1-1 0-1.5l1.6-1.3-1.6-2.8-1.9.6c-.4-.3-.8-.6-1.3-.8L15.8 5.6h-3.6l-.4 2.1c-.5.2-.9.5-1.3.8l-1.9-.6-1.6 2.8 1.6 1.3c-.1.5-.1 1 0 1.5l-1.6 1.3 1.6 2.8 1.9-.6c.4.3.8.6 1.3.8l.4 2.1h3.6l.4-2.1c.5-.2.9-.5 1.3-.8l1.9.6 1.6-2.8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
                <span>Configuración</span>
            </a>
            </nav>

            <div className="tournament-code-card">
            <p className="code-label">Código del torneo</p>
            <p className="code-value">7X8J-9K2L</p>
            <button className="share-btn">
                <svg viewBox="0 0 24 24" fill="none" width="15" height="15"><circle cx="6" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.6"/><circle cx="17" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.6"/><circle cx="17" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.6"/><path d="M8 11l7-3.8M8 13l7 3.8" stroke="currentColor" strokeWidth="1.6"/></svg>
                Compartir
            </button>
            </div>
        </aside>
            <div className="mobile-topbar">
                <button className="menu-toggle" id="menuToggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="sidebar">
                <span></span><span></span><span></span>
                </button>
                <span className="mobile-brand">MINILIGA</span>
            </div>
            <div className="sidebar-overlay" id="sidebarOverlay"></div>
        </div>
        
    )
}