import React, { Component } from 'react';
// require('dotenv').config();
import '../App.css';

import Clock from './Clock';
import Weather from './Weather';
import APOD from './APOD';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="row1">
          <Clock />
          <Weather />
        </div>
        <div className="row2">
          <APOD />  
        </div>        
      </div>
    );
  }
}

export default App;
