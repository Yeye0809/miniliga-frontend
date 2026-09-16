import { HomFeature } from "../../components/homeFeatures/HomeFeature";
import { HomeHero } from "../../components/homeHero/HomeHero";
import { NavBar } from "../../components/navbar/NavBar";
import './HomePage.css';

export function HomePage(){
    return(
        <header className="hero">
            <NavBar />
            <HomeHero />
            <HomFeature />
        </header>
        
    )
}