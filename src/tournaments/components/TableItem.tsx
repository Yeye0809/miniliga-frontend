import { useNavigate } from "react-router-dom";
import type { TournamentResponse } from "../interfaces/Tournament.response"

interface TournamentProps{
    tournament : TournamentResponse;
}

export const TableItem = ({tournament} : TournamentProps) => {

  const navigate = useNavigate();

  return (
    <tr onClick={() => navigate(`/panel/torneo/${tournament.id}`)} style={{cursor: 'pointer'}}>
        <td>{tournament.nombre}</td>
        <td>{tournament.fechaInicio}</td>
        <td>{tournament.fechaFin}</td>
        <td><span className={`badge ${tournament.activo ? 'badge-activo' : 'badge-pendiente'}`}>{ tournament.activo ? "Activo" : "Finalizado"}</span></td>
        <td>{tournament.id}</td>
    </tr>
  )
}
