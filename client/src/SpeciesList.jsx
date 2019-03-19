import React from 'react';

export default function SpeciesList({ species }) {
    console.log('SpeciesList', species)
    let list = species.map( (species, i) => {
            return <li className="species-list--item" key={i}>{species.name}</li>
    })
    if (!list.length) list = <p>Select a species</p>
    return (
        <ul className="species-list">
            {list}
        </ul>
    )
}