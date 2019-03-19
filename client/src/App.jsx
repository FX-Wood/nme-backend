import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      planets: [],
      currentPlanet: {},
      currentSpecies: {},
      loading: false
    }
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
    let planets
    if (this.state.planets.length) {
      planets = this.state.planets.map( (planet, i) => {
        return <div key={i} ><p>{planet.name}</p> <p>{planet.type}</p></div>
      })
    }
    return (
    <div className="App">
      <h1>Hello, here are the planets</h1>
      {planets}
    </div>
    )
  }
}
export default App;
