
import './TeamForm.css';
import { createTeam } from '../../actions/create-team';
import type { TeamResponse } from '../../interfaces/team.interface';


interface Props{
    torneoId : number;
    onClose : ()=>void;
    onTeamCreate : (team : TeamResponse)=>void
}


export const TeamForm = ({onClose, torneoId, onTeamCreate} : Props) => {

   
    const handleSubmit = async (e:React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const nameTeam = formData.get("nameTeam");

        if( typeof nameTeam !== 'string' || !nameTeam.trim() ){
            return;
        }

        const team = await  createTeam({
            nombre : nameTeam.trim(),
            torneo : torneoId, 
        });
        
        onTeamCreate(team);
        console.log({team})

        onClose();
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

            </form>

        </div>
    );
    
}


