import React, { Component } from 'react';
import '../App.css';

import Clock from './Clock';
import Weather from './Weather';
import Image from './Image';

class App extends Component {

  render() {
    // const { lat, lon } = this.state; 
    return (
      <div className="App">
        <Clock />
        <Weather />   
        <Image />     
      </div>
    );
  }
}

export default App;
