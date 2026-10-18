import React, { useState, type Dispatch, type SetStateAction } from "react";
import { CreateTournament } from "../actions/createTournament";
import type { TournamentRequets, TournamentResponse } from "../interfaces/Tournament.response";


interface Props{
    onTournamentCreate : Dispatch<SetStateAction<TournamentResponse[]>>
}


export const FormTournament = ({onTournamentCreate} : Props) => {


    const [form, setForm] = useState<TournamentRequets>({
        nombre: '',
        descripcion: '',
        fechaInicio: '',
        fechaFin: '',        
    })

    const handleChange = (  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) =>{
        const {name, value} = e.target;

        setForm((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const tournamentCreated = await  CreateTournament(form);    

            onTournamentCreate((tournamentCurrent) => [...tournamentCurrent, tournamentCreated]);    

            setForm({
                nombre: '',
                descripcion: '',
                fechaInicio: '',
                fechaFin: '',        
            });
            
        } catch (error) {
            console.warn('Error al crear el torneo', error);
        }
        
    }

  return (
     <form onSubmit={handleSubmit} className="form">

        <div className="field">
            <label htmlFor="nombre" className="label">Nombre del torneo</label>
            <input type="text" id="nombre" name="nombre" className="input" placeholder="Ingrese el nombre del torneo" 
                value={form.nombre} onChange={handleChange}
            />
        </div>

        <div className="field">
            <label htmlFor="descripcion" className="label">Descripción</label>
            <textarea id="descripcion" name="descripcion" className="input textarea" placeholder="Ingrese una breve descripción del torneo"
                value={form.descripcion} onChange={handleChange}
            ></textarea>
        </div>

        <div className="field-row">
            <div className="field">
                <label htmlFor="fecha-inicio" className="label">Fecha de inicio</label>
                <div className="input-wrap">
                <input type="text" id="fecha-inicio" name="fechaInicio" className="input input-date" placeholder="aaaa - mm - dd" 
                    value={form.fechaInicio} onChange={handleChange}
                />
                <svg className="icon-calendar" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="4" y="5.5" width="16" height="14.5" rx="2" />
                    <path d="M4 10h16" />
                    <path d="M8.5 3.5v3M15.5 3.5v3" />
                </svg>
                </div>
            </div>

            <div className="field">
                <label htmlFor="fecha-fin" className="label">Fecha de finalización</label>
                <div className="input-wrap">
                <input type="text" id="fecha-fin" name="fechaFin" className="input input-date" placeholder="aaaa - mm - dd" 
                    value={form.fechaFin} onChange={handleChange}
                />
                <svg className="icon-calendar" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="4" y="5.5" width="16" height="14.5" rx="2" />
                    <path d="M4 10h16" />
                    <path d="M8.5 3.5v3M15.5 3.5v3" />
                </svg>
                </div>
            </div>
        </div>

        <button type="submit" className="btn btn-primary">
            <svg className="icon-save" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 3.5H7.5A1.5 1.5 0 0 0 6 5v14a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19V7.5L14 3.5z" />
                <path d="M14 3.5V7.5h4" />
                <path d="M9 12.5h6M9 15.5h6" />
            </svg>
            Crear torneo
        </button>

    </form>
  )
}
