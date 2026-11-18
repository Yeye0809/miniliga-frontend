
import { useEffect, useState } from 'react';
import { EquipoGrid } from '../../team/components/TeamGrid';
import { TeamForm } from '../../team/components/TeamForm/TeamForm';

import './TeamPage.css';
import { useTournament } from '../../context/useTournament';
import { useNavigate } from "react-router-dom";


export function TeamPage(){

    const {reLoadTeams, reLoadPlayers, torneoId, teams, players, setTeams } = useTournament();
    const navigate = useNavigate();

    const [search, setSearch] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [loadError, setLoadError] = useState("");
    
    useEffect(()=>{      
        Promise.all([reLoadTeams(), reLoadPlayers()]).catch((error: unknown) => {
            setLoadError(error instanceof Error ? error.message : "No se pudo cargar la información del torneo.");
        });
    },[torneoId, reLoadTeams, reLoadPlayers])

    const filteredTeams = teams.filter( team => team.nombre.toLowerCase().includes(search.toLowerCase()));
   
    if( !torneoId ){
        return <h1>Torneo no existe</h1>
    }

    return(
    <main className="content">
        {loadError && <p role="alert">{loadError}</p>}

        <header className="page-header">
            <div className="page-header-left">
                <button className="back-btn" aria-label="Volver al panel" onClick={() => navigate("..")}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
                </button>
                <h1>Equipos</h1>
            </div>
            <button 
                className="add-team-btn"
                onClick={ () => setShowForm(true) }
                >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                Agregar equipo
            </button>
        </header>

        <div className="search-bar">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            <input 
                type="text" placeholder="Buscar equipo..." 
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </div>

        { showForm && (
            <div className='modal-overlay'>
                <div className='modal-containers'>
                    <TeamForm onClose={()=>setShowForm(false)} torneoId={Number(torneoId)} 
                    onTeamCreate={(newTeam) => {
                        setTeams(currentTeams => [...currentTeams, newTeam]);
                    }}/>
                </div>
            </div>
            )
        }

        <EquipoGrid teams={filteredTeams} players={players}/>

    </main>
    )
}