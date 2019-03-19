import React from 'react';

export default function SpeciesDetail({ species }) {
    console.log('current species', species)
    console.log('warp capable', species.warpCapable)
    let item;
    if (Object.keys(species).length) {
        item = <><p>{species.name}</p><p>{species.warpCapable ? 'Warp capable' : 'Non-warp-faring'}</p></>
    } else {
        item = <p>Select a species</p>
    }
    console.log(item)

    return (
        <div className="species-detail">
            {item}
        </div>
    )
}