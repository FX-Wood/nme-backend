import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PlanetList from './PlanetList';

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
    return (
    <div className="App">
      <h1>Hello, here are the planets</h1>
      <PlanetList planets={this.state.planets} />
    </div>
    )
  }
}
export default App;
