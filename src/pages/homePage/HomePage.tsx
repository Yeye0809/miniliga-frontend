import { HomFeature } from "../../home/components/homeFeatures/HomeFeature";
import { HomeHero } from "../../home/components/homeHero/HomeHero";
import { NavBar } from "../../home/components/navbar/NavBar";
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