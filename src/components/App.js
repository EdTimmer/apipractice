import React, { Component } from 'react';
// require('dotenv').config();
import '../App.css';

import Clock from './Clock';
import Weather from './Weather';
import NASAPhoto from './NASAPhoto';

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
          <NASAPhoto />  
        </div>        
      </div>
    );
  }
}

export default App;
