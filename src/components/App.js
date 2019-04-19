import React, { Component } from 'react';
import '../App.css';

import Clock from './Clock';
import Weather from './Weather';

class App extends Component {

  render() {
    // const { lat, lon } = this.state; 
    return (
      <div className="App">
        <Clock />
        <Weather />        
      </div>
    );
  }
}

export default App;
