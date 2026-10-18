import { PlayerRow } from "../PlayerRow/PlayerRow";

import './PlayerTable.css';
import { useEffect } from "react";
import { useTournament } from "../../../context/useTournament";



export const PlayerTable = ( ) => {

  const {players, reLoadPlayers, torneoId} = useTournament();

   useEffect(()=>{ 
        
      reLoadPlayers();
  
    },[torneoId]);

  return (
   <section className="players-table" aria-label="Listado de jugadores">
      <div className="players-table__scroll">
        <table className="players-table__table">
          <thead className="players-table__head">
            <tr>
              <th className="players-table__heading players-table__heading--left">Nombre</th>
              <th className="players-table__heading players-table__heading--left">Apellido</th>
              <th className="players-table__heading players-table__heading--left">Teléfono</th>
              <th className="players-table__heading players-table__heading--left">Posición</th>
              <th className="players-table__heading players-table__heading--left">Equipo</th>
              <th className="players-table__heading">Goles</th>
              <th className="players-table__heading">Nº camiseta</th>
              <th className="players-table__heading">Amarillas</th>
              <th className="players-table__heading">Rojas</th>
              <th className="players-table__heading players-table__heading--actions">
                <span className="players-table__sr-only">Acciones</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <PlayerRow key={player.id} playerProps={player} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
