import React from 'react';

const SpeciesList = ({ planet }) => {
    let list = planet.species.map( (species, i) => {
        return <li className="species-list--item" key={i}>{species.name}</li>
    })
    if (!list.length) list = <p>Select a species</p>
    return (
        <ul className="species-list">
            {list}
        </ul>
    )
}