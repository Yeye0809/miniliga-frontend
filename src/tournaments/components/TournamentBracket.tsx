import type { TournamentResponse } from "../interfaces/Tournament.response";
import { TableItem } from "./TableItem";

interface TournamentsProps{
    tournaments : TournamentResponse[];

}


export const TournamentBracket = ({ tournaments } : TournamentsProps) => { 
  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="col-nombre">Nombre del torneo</th>
            <th scope="col" className="col-inicio">Fecha de inicio</th>
            <th scope="col" className="col-fin">Fecha de fin</th>
            <th scope="col" className="col-estado">Estado</th>
            <th scope="col" className="col-codigo">Código</th>
            <th scope="col" className="col-acciones"><span className="sr-only">Acciones</span></th>
          </tr>
        </thead>
        <tbody>
          {
            tournaments.map( tourn => (
              <TableItem key={tourn.id} tournament={tourn}/>
            ))
          }
        </tbody>
      
      </table>
    </div>
  )
}
