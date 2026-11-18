import { useNavigate } from "react-router-dom";
import type { TournamentResponse } from "../interfaces/Tournament.response"

interface TournamentProps{
    tournament : TournamentResponse;
}

export const TableItem = ({tournament} : TournamentProps) => {

  const navigate = useNavigate();
  const estado = tournament.estado ?? (tournament.activo ? "ACTIVO" : "FINALIZADO");
  const statusBadgeClass = {
    ACTIVO: "badge-activo",
    PAUSADO: "badge-pendiente",
    FINALIZADO: "badge-finalizado",
  } as const;
  const statusLabel = {
    ACTIVO: "Activo",
    PAUSADO: "En pausa",
    FINALIZADO: "Finalizado",
  } as const;

  return (
    <tr onClick={() => navigate(`/panel/torneo/${tournament.id}`)} style={{cursor: 'pointer'}}>
        <td>{tournament.nombre}</td>
        <td>{tournament.fechaInicio}</td>
        <td>{tournament.fechaFin}</td>
        <td><span className={`badge ${statusBadgeClass[estado]}`}>{statusLabel[estado]}</span></td>
        <td>{tournament.id}</td>
    </tr>
  )
}
