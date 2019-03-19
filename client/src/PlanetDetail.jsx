import React from 'react'
import SpeciesList from './SpeciesList';

export default function PlanetDetail({ currentPlanet, selectSpecies }) {
    console.log('PlanetDetail', currentPlanet)
    let planet;
    console.log(currentPlanet)
    if (!Object.keys(currentPlanet).length) {
        planet = <p>select a planet</p>
    } else {
        planet = (
            <>
                <img src={currentPlanet.img} alt={currentPlanet.name} className="planet-list--img"/>
                <h3>{currentPlanet.name}</h3>
                <h4>Type: {currentPlanet.type}</h4>
                <SpeciesList species={currentPlanet.species} selectSpecies={selectSpecies} />
            </>
        )
    }
    
    return (
        <div className="planet-detail">
            {planet}
        </div>
    )

}