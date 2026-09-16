
import './navbar.css'


export function NavBar(){

    return (
    <nav className='navbar'>
      <div className="nav-container">
        <div className="brand">
          <svg className="brand-logo" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M24 2 L44 10 V22 C44 34 36 42 24 46 C12 42 4 34 4 22 V10 Z" fill="#0E7A34"/>
            <path d="M24 6 L40 12.5 V22 C40 32 33 39 24 42.3 C15 39 8 32 8 22 V12.5 Z" fill="#FFFFFF"/>
            <circle cx="24" cy="21" r="8" fill="none" stroke="#0E7A34" strokeWidth="1.6"/>
            <path d="M24 15 L28.2 18 L26.6 22.8 H21.4 L19.8 18 Z" fill="#0E7A34"/>
          </svg>
          <span className="brand-name">MINILIGA</span>
        </div>

        <ul className="nav-links">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Cómo funciona</a></li>
          <li><a href="#">Características</a></li>
          <li><a href="#">Precios</a></li>
        </ul>

        <a href="#" className="btn btn-login">Iniciar sesión</a>
      </div>
    </nav>
    )
}