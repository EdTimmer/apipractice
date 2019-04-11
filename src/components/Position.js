import React from 'react';

class Position extends React.Component {
  state = {
    lat: "",
    lon: "",
    errorMessage: ""
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      }),
      err => this.setState({ errorMessage: err.message})
    )
  }

  render() {

  
    return (
      <div className="coordinates">
        <span>LAT: {this.state.lat}</span>
        <span>LON: {this.state.lon}</span>
        
       
      </div>
    )
  }
}

export default Position;