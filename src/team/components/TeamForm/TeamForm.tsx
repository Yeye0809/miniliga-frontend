
import './TeamForm.css';
import { createTeam } from '../../actions/create-team';
import type { TeamResponse } from '../../interfaces/team.interface';
import { useState, type FormEvent } from "react";


interface Props{
    torneoId : number;
    onClose : ()=>void;
    onTeamCreate : (team : TeamResponse)=>void
}


export const TeamForm = ({onClose, torneoId, onTeamCreate} : Props) => {
    const [error, setError] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        const formData = new FormData(e.currentTarget);
        const nameTeam = formData.get("nameTeam");

        if( typeof nameTeam !== 'string' || !nameTeam.trim() ){
            return;
        }

        try {
            const team = await createTeam({
                nombre: nameTeam.trim(),
                torneo: torneoId,
            });
            onTeamCreate(team);
            onClose();
        } catch (createError) {
            setError(createError instanceof Error ? createError.message : "No se pudo crear el equipo.");
        }
    };

    return (
        <div className="formulario-equipo">

            <div className="formulario-header">

                <div className="formulario-icono">
                    👥
                </div>

                <div>
                    <h2>Crear equipo</h2>

                    <p>
                        Ingresa el nombre del equipo que deseas crear.
                    </p>
                </div>

                <button
                    type="button"
                    className="btn-cerrar"
                    onClick={onClose}
                >
                    ×
                </button>

            </div>


            <form onSubmit={handleSubmit}>

                <div className="form-group">

                    <label htmlFor="nombreEquipo">
                        Nombre del equipo <span>*</span>
                    </label>

                    <input
                        id="nombreEquipo"
                        name="nameTeam"
                        type="text"
                        placeholder="Ejemplo: Los Titanes"
                        required
                    />

                </div>


                <div className="formulario-divider"></div>


                <div className="formulario-actions">

                    <button
                        type="button"
                        className="btn-cancelar"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>

                    <button
                        type="submit"
                        className="btn-crear"
                    >
                        + Crear equipo
                    </button>

                </div>
                {error && <p role="alert">{error}</p>}

            </form>

        </div>
    );
    
}


