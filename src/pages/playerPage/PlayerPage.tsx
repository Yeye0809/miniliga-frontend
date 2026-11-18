import { useEffect, useState } from "react"
import { PlayerHeader } from "../../player/components/playerHeader/PlayerHeader"
import { PlayerSearch } from "../../player/components/playerSearch/PlayerSearch"
import { PlayerTable } from "../../player/components/PlayerTable/PlayerTable"
import { TeamFilter } from "../../player/components/teamFilter/TeamFilter"
import {PlayerModal} from "../../RegisterPlayer/components/PlayerModal/PlayerModal"
import { useParams } from "react-router-dom"
import { useTournament } from "../../context/useTournament"


export const PlayerPage = () => {

  const {torneoId} = useParams<{torneoId : string}>(); 
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [search, setSearch] = useState("");
  const [teamFilter, setTeamFilter] = useState("");
  const [loadError, setLoadError] = useState("");
  const { teams, torneoId: tournamentId, reLoadTeams } = useTournament();


  const openModal = () => setIsModalOpen(true);
  const closeModal = ()=> setIsModalOpen(false);

  useEffect(() => {
    reLoadTeams().catch((error: unknown) => {
      setLoadError(error instanceof Error ? error.message : "No se pudieron cargar los equipos.");
    });
  }, [tournamentId, reLoadTeams]);

  return (
    <main className="players-page">
      {loadError && <p role="alert">{loadError}</p>}
      <PlayerHeader onOpen={openModal}/>
      <section className="players-page__toolbar" aria-label="Búsqueda y filtros">
        <PlayerSearch value={search} onChange={setSearch} />
        <TeamFilter teams={teams} value={teamFilter} onChange={setTeamFilter} />
      </section>
      <PlayerTable search={search} teamFilter={teamFilter} />
      {
        isModalOpen && <PlayerModal torneoId={Number(torneoId)} onClose={closeModal}/>
      }
    </main>
  )
}
