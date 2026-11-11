import type { Partido } from '../../../matches/interface/types';

interface HistorialPartidoItemProps {
  partido: Partido;
}

function formatearFecha(fechaHora: string) {
  const fecha = new Date(fechaHora);

  if (Number.isNaN(fecha.getTime())) {
    return fechaHora;
  }

  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(fecha);
}

export function HistorialPartidoItem({ partido }: HistorialPartidoItemProps) {
  const resultado = `${partido.local.nombre} ${partido.golesLocal ?? 0} - ${partido.golesVisitante ?? 0} ${partido.visitante.nombre}`;

  return (
    <li className="match-history-item">
      <span className="match-date">{formatearFecha(partido.fechaHora)}</span>
      <strong>{resultado}</strong>
      <span className="match-status">{partido.estado === 'FINALIZADO' ? 'Finalizado' : 'Próximo'}</span>
    </li>
  );
}
