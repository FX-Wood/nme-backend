import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PlanetList from './PlanetList';
import PlanetDetail from './PlanetDetail';

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
  }
  selectPlanet(planet) {
    this.setState({
      currentPlanet: planet
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
      <h1>Hello, here are the planets</h1>
      <PlanetList planets={this.state.planets} selectPlanet={this.selectPlanet} />
      <PlanetDetail planets={this.state.planets} currentPlanet={this.state.currentPlanet} />
    </div>
    )
  }
}
export default App;
