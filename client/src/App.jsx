import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PlanetList from './PlanetList';
import PlanetDetail from './PlanetDetail';
import SpeciesDetail from './SpeciesDetail';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      planets: [],
      currentPlanet: {},
      currentSpecies: {},
      loading: false
    }
    this.selectPlanet = this.selectPlanet.bind(this)
    this.selectSpecies = this.selectSpecies.bind(this)
  }
  selectPlanet(planet) {
    axios.get(`/api/planets/${planet._id}/species`)
    .then(res =>
      this.setState({
        currentPlanet: res.data
      })
    )
  }
  selectSpecies(species) {
    this.setState({
      currentSpecies: species
    })
  }

  componentDidMount() {
    axios.get('/api/planets')
    .then(res => {
      this.setState({
        planets: res.data
      })
    })
  }

  render() {
    return (
    <div className="App">
      <PlanetList planets={this.state.planets} selectPlanet={this.selectPlanet} />
      <div className="details">
        <PlanetDetail planets={this.state.planets} currentPlanet={this.state.currentPlanet} selectSpecies={this.selectSpecies} />
        <SpeciesDetail species={this.state.currentSpecies} />
      </div>
    </div>
    )
  }
}
export default App;
