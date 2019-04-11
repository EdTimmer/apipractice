import React, { Component } from 'react';
import '../App.css';

import Clock from './Clock';
import Position from './Position';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <Position />
      </div>
    );
  }
}

export default App;
