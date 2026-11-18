import type { MatcheResponse } from "../../matches/interface/matche-response"

interface Props{
    matche : MatcheResponse;
}

export const MatcheItem = ( {matche} : Props) => {
  const matchDate = new Date(matche.fecha);
  const dateLabel = matchDate.toLocaleDateString("es-CO", { weekday: "short", day: "numeric", month: "short" });
  const timeLabel = matchDate.toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" });
  return (
    <li className="match-row">
        <div className="match-time">
            <p className="match-date">{dateLabel}</p>
            <p className="match-hour">{timeLabel}</p>
        </div>
        <div className="match-teams">
            <span className="team">
                <svg className="crest" viewBox="0 0 24 24"><path d="M12 2 21 5.5V11c0 5.2-3.8 9-9 10.5-5.2-1.5-9-5.3-9-10.5V5.5Z" fill="#0E7A34"/></svg>
                {matche.equipoA}
            </span>
            <span className="vs">V</span>
            <span className="team">
                <svg className="crest" viewBox="0 0 24 24"><path d="M12 2 21 5.5V11c0 5.2-3.8 9-9 10.5-5.2-1.5-9-5.3-9-10.5V5.5Z" fill="#B3312C"/></svg>
                {matche.equipoB}
            </span>
        </div>
        <span className="group-tag">{matche.fase}</span>
    </li>
  )
}
