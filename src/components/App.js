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
        <div className="row1">
          <Clock />
          <Weather />
        </div>
        <div className="row2">
          <Image />  
        </div>          
      </div>
    );
  }
}

export default App;
