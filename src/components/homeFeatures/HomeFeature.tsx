import './HomeFeature.css';

export function HomFeature(){
    return (
    <section className="features">
        <div className="feature">
            <svg className="feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 4h10v3a5 5 0 0 1-5 5 5 5 0 0 1-5-5V4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
            <path d="M7 5H4v1a4 4 0 0 0 4 4M17 5h3v1a4 4 0 0 1-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            <path d="M12 12v3m-3 3h6m-6 0v2h6v-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3>Fácil de usar</h3>
            <p>Crea tu torneo en<br/>minutos.</p>
        </div>

        <div className="feature">
            <svg className="feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.6"/>
            <path d="M4 9.5h16M8 3v3M16 3v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            <path d="M7.5 12.5h2v2h-2zM11 12.5h2v2h-2zM14.5 12.5h2v2h-2zM7.5 16h2v2h-2zM11 16h2v2h-2z" fill="currentColor"/>
            </svg>
            <h3>Todo en un solo lugar</h3>
            <p>Partidos, tablas, goleadores<br/>y estadísticas.</p>
        </div>

        <div className="feature">
            <svg className="feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6"/>
            <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            <circle cx="17" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.6"/>
            <path d="M15.5 19c0-2.3 1.8-4 3.8-4s3.7 1.2 4.2 3.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
            <h3>Para todos</h3>
            <p>Jugadores, equipos y<br/>aficionados.</p>
        </div>
    </section>
    )
}