import { HomePage } from "./pages/homePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TournamentsPage } from "./pages/TournamentsPage/TournamentsPage";
import { TournamentLayout } from "./layout/tournamentLayout/TournamentLayout";
import { TeamPage } from "./pages/teamPage/TeamPage";
import { TournamentPanelPage } from "./pages/TournamentPanelPage/TournamentPanelPage";
import { PlayerPage } from "./pages/playerPage/PlayerPage";
import PartidosPageExample from "./pages/matchesPage/PartidosPage.example";
import { CheckTournamentPage } from "./checkTournament/components/CheckTournamentPage/CheckTournamentPage";
import { TopScorersPage } from "./topScorers/components/TopScorersPage/TopScorersPage";
import { StandingsPage } from "./standings/components/StandingsPage/StandingsPage";


export function App(){

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/torneos/" element={<TournamentsPage />}/>
                    <Route path="/consultar-torneo" element={<CheckTournamentPage />} />
                    
                    <Route path="/panel/torneo/:torneoId" element={<TournamentLayout />}> 
                        <Route path="goleadores" element={<TopScorersPage />} />
                        <Route path="tabla-posiciones" element={<StandingsPage />} />
                        <Route index element={<TournamentPanelPage />}/>
                        <Route path="equipos"  element={<TeamPage />}/>
                        <Route path="jugadores" element={<PlayerPage />}/>
                        <Route path="partidos" element={<PartidosPageExample />}/>
                    </Route>
                    
                </Routes>                
            </BrowserRouter>
            
        </>
    )
}