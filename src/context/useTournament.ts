import { useContext } from "react";
import { TournamenContext } from "./TournamentContext";

export const useTournament = () => {
    const context = useContext(TournamenContext);

    if( !context ){
        throw new Error('Debe usar el useTournament dentro del TournamentProvider');
        
    }

    return context;
}