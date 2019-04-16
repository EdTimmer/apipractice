import React, { Component } from 'react';
import '../App.css';

import Clock from './Clock';
import Position from './Position';
import Weather from './Weather';

class App extends Component {
  state = {
    lat: undefined,
    lon: undefined,
    errorMessage: ""
  }

  componentDidMount() {
    console.log('props in componentDidMount: ', this.props )
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      }),
      err => this.setState({ errorMessage: err.message})
    )
  }
  render() {
    console.log(this.props)
    const { lat, lon } = this.state; 
    return (
      <div className="App">
        <Clock />
        <Position />
        <Weather lat={lat} lon={lon} />
      </div>
    );
  }
}

export default App;
