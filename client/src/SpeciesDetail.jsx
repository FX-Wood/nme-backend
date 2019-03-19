import React from 'react';

export default function SpeciesDetail({ species }) {
    let item;
    if (typeof item !== 'undefined') {
        item = <><p>{species.name}</p><p>{species.warpCapable}</p></>
    } else {
        item = <p>Select a species</p>
    }

    return (
        <div className="species-detail">
            {item}
        </div>
    )
}