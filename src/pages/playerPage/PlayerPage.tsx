import { useState } from "react"
import { PlayerHeader } from "../../player/components/playerHeader/PlayerHeader"
import { PlayerSearch } from "../../player/components/playerSearch/PlayerSearch"
import { PlayerTable } from "../../player/components/PlayerTable/PlayerTable"
import { TeamFilter } from "../../player/components/teamFilter/TeamFilter"
import {PlayerModal} from "../../RegisterPlayer/components/PlayerModal/PlayerModal"
import { useParams } from "react-router-dom"


export const PlayerPage = () => {

  const {torneoId} = useParams<{torneoId : string}>(); 
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


  const openModal = () => setIsModalOpen(true);
  const closeModal = ()=> setIsModalOpen(false);


  return (
    <main className="players-page">
      <PlayerHeader onOpen={openModal}/>
      <section className="players-page__toolbar" aria-label="Búsqueda y filtros">
        <PlayerSearch />
        <TeamFilter />
      </section>
      <PlayerTable />
      {
        isModalOpen && <PlayerModal torneoId={Number(torneoId)} onClose={closeModal}/>
      }
    </main>
  )
}
