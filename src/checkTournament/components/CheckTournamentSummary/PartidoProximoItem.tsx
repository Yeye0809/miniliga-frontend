import type { Partido } from '../../../matches/interface/types';

interface PartidoProximoItemProps {
  partido: Partido;
}

export function PartidoProximoItem({ partido }: PartidoProximoItemProps) {
  return (
    <li>
      <span>{partido.local.nombre}</span>
      <span>vs</span>
      <span>{partido.visitante.nombre}</span>
    </li>
  );
}
