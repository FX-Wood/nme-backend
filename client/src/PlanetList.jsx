import React from 'react'

export default function PlanetList({ planets }) {
    const planets = planets.map(planet => <p>{planet.name + '\n' + planet.type}</p>)
    if (!planets.length) {
       planets = <p>Discovering planets</p>
    }
    return (
        <div className="PlanetList">
            {planets}
        </div>
    )
}