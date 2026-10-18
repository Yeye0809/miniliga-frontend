import {PlayerForm} from "../PlayerForm/PlayerForm";
import "./PlayerModal.css";

interface Props{
  onClose: () => void;
  torneoId: number;
}

export const PlayerModal = ({onClose, torneoId}: Props) => {
  return (
    <div className="player-modal-overlay">
      <div
        className="player-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="player-modal-title"
      >
        <header className="player-modal-header">
          <svg
            className="player-modal-header-icon"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1z" />
          </svg>

          <h2 id="player-modal-title" className="player-modal-title">
            Agregar jugador
          </h2>

          <button 
            type="button"  
            className="player-modal-close" aria-label="Cerrar"
          onClick={onClose}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          </button>

          <p className="player-modal-subtitle">
            Completa la información del jugador para agregarlo al torneo.
          </p>
        </header>

        <PlayerForm onClose={onClose} torneoId={torneoId}/>
      </div>
    </div>
  );
}

