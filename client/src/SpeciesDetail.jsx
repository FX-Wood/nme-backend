import React, { Component } from 'react';
import Modal from './Modal';
import './Modal.css'

export default class SpeciesDetail extends Component{
    constructor(props) {
        super(props)
        this.state = {
            addingSpecies: false
        }
        this.addSpecies = this.addSpecies.bind(this)
    }

    addSpecies() {
        console.log('addingSpecies')
        this.setState({
            addingSpecies: true
        })
    }

    render() {
        let species = this.props.species
        console.log('current species', species)
        console.log('warp capable', species.warpCapable)
        let item;
        if (Object.keys(species).length) {
            item = (
                <>
                    <i style={ {float: 'right'} } onClick={this.addSpecies}>add_species</i>
                    <p>{species.name}</p>
                    <p>{species.warpCapable ? 'Warp capable' : 'Non-warp-faring'}</p>
                </>
            )
        } else {
            item = <p>Select a species</p>
        }
        console.log(item)

        return (
            <div className="species-detail">
                {item}
                <div className={"modal-overlay" + (this.state.addingSpecies? ' showModal' : ' hideModal')}>
                <Modal  />
                </div>
            </div>
        )
    }
}