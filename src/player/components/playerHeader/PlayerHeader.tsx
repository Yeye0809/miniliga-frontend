import './PlayerHeader.css'


interface Props{
  onOpen : ()=>void;
}

export const PlayerHeader = ({onOpen} : Props) => {
  return (
    <div className="players-header">
      <div className="players-header__title-group">
        <button type="button" className="players-header__back-button" aria-label="Volver">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
        </button>
        <h1 className="players-header__title">Jugadores</h1>
      </div>

      <button 
        type="button" 
        className="players-header__add-button"
        onClick={onOpen}
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
        Agregar jugador
      </button>
    </div>
  )
}
