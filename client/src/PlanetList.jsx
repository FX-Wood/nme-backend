import React from 'react'

export default function PlanetList({ planets, selectPlanet }) {
    console.log('planetList', planets)
    let list = planets.map((planet, i) => {
        return (
            <div className="planet-list--item" key={i}>
                <p  onClick={() => selectPlanet(planet)} >{planet.name + '\n' + planet.type}</p>
            </div>
        )
    })
    if (!list.length) {
       list = <p>Discovering planets</p>
    }
    return (
        <div className="planet-list">
            {list}
        </div>
    )
}