import type { MatcheResponse } from "../../matches/interface/matche-response"
import { MatcheItem } from "./MatcheItem"
import { Link } from "react-router-dom";

interface Props{
  matches : MatcheResponse[];
}

export const MatchesCard = ({matches} : Props) => {
  return (
      <div className="card matches-card">
        <div className="card-header">
          <h2>Próximos partidos</h2>
          <Link to="partidos" className="link-see-all">Ver todos</Link>
        </div>

        <ul className="match-list">
          {
            matches.map( matche => (
              <MatcheItem key={matche.idPartido} matche={matche}/>
            ))
          }
          
        </ul>
      </div>
  )
}
