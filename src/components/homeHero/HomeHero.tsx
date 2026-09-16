
import './HomeHero.css';

export function HomeHero(){
    return (
        <main className="hero-content">
            <p className="eyebrow">Organiza. Compite. Disfruta.</p>
            <h1 className="headline">Vive tu torneo<br/>con <span className="accent">MiniLiga</span></h1>
            <p className="subtext">La plataforma perfecta para organizar torneos<br/>de fútbol amateur.</p>

            <div className="cta-group">
            <a href="#" className="btn btn-primary">Crear torneo</a>
            <a href="#" className="btn btn-secondary">Consultar torneo</a>
            </div>
        </main>
    )
}