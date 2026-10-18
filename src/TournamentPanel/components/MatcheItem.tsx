import type { MatcheResponse } from "../../matches/interface/matche-response"

interface Props{
    matche : MatcheResponse;
}

export const MatcheItem = ( {matche} : Props) => {
  return (
    <li className="match-row">
        <div className="match-time">
            <p className="match-date">Sáb 25 May</p>
            <p className="match-hour">10:00 AM</p>
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
