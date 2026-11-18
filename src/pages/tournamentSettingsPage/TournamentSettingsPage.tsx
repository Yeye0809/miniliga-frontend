import { useState, type ChangeEvent, type FormEvent } from "react";
import type {
  TournamentStatus,
  TournamentUpdateRequest,
} from "../../tournaments/interfaces/Tournament.response";
import "./TournamentSettingsPage.css";

const STATUS_OPTIONS: {
  value: TournamentStatus;
  label: string;
  description: string;
}[] = [
  {
    value: "ACTIVO",
    label: "Activo",
    description: "El torneo sigue en marcha.",
  },
  {
    value: "PAUSADO",
    label: "En pausa",
    description: "Pausa temporalmente la actividad.",
  },
  {
    value: "FINALIZADO",
    label: "Finalizar torneo",
    description: "Marca el torneo como terminado.",
  },
];

const EMPTY_FORM: TournamentUpdateRequest = {
  nombre: "",
  fechaInicio: "",
  fechaFin: "",
  descripcion: "",
  estado: "ACTIVO",
};

export function TournamentSettingsPage() {
  const [formData, setFormData] = useState<TournamentUpdateRequest>(EMPTY_FORM);

  const hasChanges =
    formData.nombre !== EMPTY_FORM.nombre ||
    formData.fechaInicio !== EMPTY_FORM.fechaInicio ||
    formData.fechaFin !== EMPTY_FORM.fechaFin ||
    formData.descripcion !== EMPTY_FORM.descripcion ||
    formData.estado !== EMPTY_FORM.estado;

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "nombre":
        setFormData((previous) => ({ ...previous, nombre: value }));
        break;
      case "fechaInicio":
        setFormData((previous) => ({ ...previous, fechaInicio: value }));
        break;
      case "fechaFin":
        setFormData((previous) => ({ ...previous, fechaFin: value }));
        break;
      case "descripcion":
        setFormData((previous) => ({ ...previous, descripcion: value }));
        break;
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section className="tournament-settings">
      <header className="tournament-settings__header">
        <div>
          <p className="tournament-settings__eyebrow">Administración</p>
          <h1 className="tournament-settings__title">Configuración del torneo</h1>
          <p className="tournament-settings__description">
            Actualiza los datos y el estado de tu torneo.
          </p>
        </div>
      </header>

      <form className="tournament-settings__card" onSubmit={handleSubmit}>
        <div className="tournament-settings__fields">
          <label className="tournament-settings__field tournament-settings__field--full" htmlFor="tournament-name">
            <span>Nombre del torneo</span>
            <input
              id="tournament-name"
              name="nombre"
              type="text"
              value={formData.nombre}
              onChange={handleChange}
              maxLength={100}
              required
            />
          </label>

          <label className="tournament-settings__field" htmlFor="tournament-start-date">
            <span>Fecha de inicio</span>
            <input
              id="tournament-start-date"
              name="fechaInicio"
              type="date"
              value={formData.fechaInicio}
              onChange={handleChange}
              max={formData.fechaFin || undefined}
              required
            />
          </label>

          <label className="tournament-settings__field" htmlFor="tournament-end-date">
            <span>Fecha de fin</span>
            <input
              id="tournament-end-date"
              name="fechaFin"
              type="date"
              value={formData.fechaFin}
              onChange={handleChange}
              min={formData.fechaInicio || undefined}
              required
            />
          </label>

          <label className="tournament-settings__field tournament-settings__field--full" htmlFor="tournament-description">
            <span>Descripción</span>
            <textarea
              id="tournament-description"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              rows={4}
            />
          </label>
        </div>

        <fieldset className="tournament-settings__status">
          <legend>Estado del torneo</legend>
          <div className="tournament-settings__status-options">
            {STATUS_OPTIONS.map((option) => (
              <label
                className={`tournament-settings__status-option${formData.estado === option.value ? " is-selected" : ""}`}
                key={option.value}
              >
                <input
                  type="radio"
                  name="estado"
                  value={option.value}
                  checked={formData.estado === option.value}
                  onChange={() => {
                    setFormData((previous) => ({ ...previous, estado: option.value }));
                  }}
                />
                <span className="tournament-settings__status-label">{option.label}</span>
                <span className="tournament-settings__status-description">{option.description}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="tournament-settings__actions">
          <button
            className="tournament-settings__button tournament-settings__button--secondary"
            type="button"
            onClick={() => setFormData(EMPTY_FORM)}
            disabled={!hasChanges}
          >
            Limpiar formulario
          </button>
          <button
            className={`tournament-settings__button tournament-settings__button--primary${formData.estado === "FINALIZADO" ? " tournament-settings__button--danger" : ""}`}
            type="button"
            disabled
            aria-describedby="tournament-settings-notice"
          >
            Guardar cambios
          </button>
        </div>
        <p className="tournament-settings__notice" id="tournament-settings-notice">
          El formulario está desconectado; los cambios no se guardan.
        </p>
      </form>
    </section>
  );
}
