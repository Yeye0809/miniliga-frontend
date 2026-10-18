import type { MatcheResponse } from "../../matches/interface/matche-response"
import { MatcheItem } from "./MatcheItem"

interface Props{
  matches : MatcheResponse[];
}

export const MatchesCard = ({matches} : Props) => {
  return (
      <div className="card matches-card">
        <div className="card-header">
          <h2>Próximos partidos</h2>
          <a href="#" className="link-see-all">Ver todos</a>
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
