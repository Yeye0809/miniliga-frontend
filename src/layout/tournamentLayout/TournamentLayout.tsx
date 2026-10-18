

import { Outlet, useParams, } from "react-router-dom";
import { SideBar } from "../../sideBar/components/SideBar";
import { HeaderPanel } from "../../TournamentPanel/components/HeaderPanel";
import { TournamentProvider } from "../../context/TournamentProvider";

import './TournamentLayout.css';

export function TournamentLayout(){
   const {torneoId} = useParams();
    return(
        <TournamentProvider torneoId={Number(torneoId)}>
            <div className="app">
                <SideBar />
                <div className="container">
                    <HeaderPanel torneoId={torneoId}/>
                    <main>
                        <Outlet />         
                    </main>
                </div>
            
            </div>
        </TournamentProvider>
    )
}