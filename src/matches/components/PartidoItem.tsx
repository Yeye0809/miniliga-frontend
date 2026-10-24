import type { Partido } from "../interface/types";
import "./PartidoItem.css";

interface Props { partido: Partido }

function formatearFecha(fechaHora: string) {
  const fecha = new Date(fechaHora);
  if (Number.isNaN(fecha.getTime())) return { fecha: "Fecha por confirmar", hora: "" };
  return {
    fecha: new Intl.DateTimeFormat("es-CO", { day: "2-digit", month: "short", year: "numeric" }).format(fecha),
    hora: new Intl.DateTimeFormat("es-CO", { hour: "2-digit", minute: "2-digit", hour12: false }).format(fecha),
  };
}

function Equipo({ nombre, color, escudoUrl }: { nombre: string; color?: string; escudoUrl?: string | null }) {
  return <div className="partido-item__equipo">
    {escudoUrl ? <img className="partido-item__escudo" src={escudoUrl} alt={`Escudo de ${nombre}`} /> : <span className="partido-item__escudo partido-item__escudo--placeholder" style={{ "--equipo-color": color || "#2d73e8" } as React.CSSProperties} aria-hidden="true">◆</span>}
    <span className="partido-item__nombre" title={nombre}>{nombre}</span>
  </div>;
}

export default function PartidoItem({ partido }: Props) {
  const { fecha, hora } = formatearFecha(partido.fechaHora);
  const tieneMarcador = partido.golesLocal != null && partido.golesVisitante != null;
  const estadoTexto = partido.estado === "FINALIZADO" ? "Finalizado" : partido.estado === "EN_JUEGO" ? "En juego" : "Pendiente";
  return <article className="partido-item">
    <div className="partido-item__fecha"><span>{fecha}</span>{hora && <span>{hora}</span>}</div>
    <Equipo nombre={partido.local.nombre} color={partido.local.color} escudoUrl={partido.local.escudoUrl} />
    <div className="partido-item__marcador" aria-label={tieneMarcador ? `Marcador ${partido.golesLocal} a ${partido.golesVisitante}` : "Partido sin marcador"}>
      {tieneMarcador ? `${partido.golesLocal} - ${partido.golesVisitante}` : "— : —"}
    </div>
    <Equipo nombre={partido.visitante.nombre} color={partido.visitante.color} escudoUrl={partido.visitante.escudoUrl} />
    <span className={`partido-item__estado partido-item__estado--${partido.estado.toLowerCase()}`}>{estadoTexto}</span>
  </article>;
}
