import { PlayerRow } from "../PlayerRow/PlayerRow";

import './PlayerTable.css';
import { useEffect, useState } from "react";
import { useTournament } from "../../../context/useTournament";

interface PlayerTableProps {
  search: string;
  teamFilter: string;
}

export const PlayerTable = ({ search, teamFilter }: PlayerTableProps) => {

  const {players, reLoadPlayers, torneoId} = useTournament();
  const [error, setError] = useState("");

   useEffect(()=>{ 
      let active = true;
      reLoadPlayers().catch((loadError: unknown) => {
        if (active) setError(loadError instanceof Error ? loadError.message : "No se pudieron cargar los jugadores.");
      });
      return () => { active = false; };
    },[torneoId, reLoadPlayers]);

    const filteredPlayers = players.filter((player) => {
      const searchable = `${player.nombre} ${player.apellido} ${player.telefono}`.toLowerCase();
      return searchable.includes(search.toLowerCase())
        && (!teamFilter || player.equipo === teamFilter);
    });

  return (
   <section className="players-table" aria-label="Listado de jugadores">
      {error && <p role="alert">{error}</p>}
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
            {filteredPlayers.map((player) => (
              <PlayerRow key={player.id} playerProps={player} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
