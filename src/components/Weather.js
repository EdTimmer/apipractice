import React from 'react';

const API_KEY = "5abd98ed849a5414b5960c496cc31a3d";

class Weather extends React.Component {
  state = {
    lat: undefined,
    lon: undefined, 
    errorMessage: "",
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }


  componentDidMount() {
    // window.navigator.geolocation.getCurrentPosition(
    //   position => this.setState({
    //     lat: position.coords.latitude,
    //     lon: position.coords.longitude
    //   }),
    //   err => this.setState({ errorMessage: err.message})
    // )
    // .then(() => {
      fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.lon}&appid=${API_KEY}&units=metric`)
      .then((res) => res.json())
      .then((data) => console.log('data in the componentDidMount is: ', data))
      // const data = api_call.json();
    // })
    // console.log(this.state.lat)
    // .then(() => this.getWeather())
  }
    
    
  

  getLocation = async () => {
    await window.navigator.geolocation.getCurrentPosition(
      position => this.setState({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      }),
      err => this.setState({ errorMessage: err.message})
    )
  }

  getWeather = async () => {
    
    // e.preventDefault();
    // const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log('data is: ', data)
  }

  render() {
    return (
      <div>
        
        <button onClick={this.getWeather}>get weather</button>
      </div>
    )
  }
}

export default Weather;

/*
componentDidMount() {
    let cachedLat = localStorage.getItem(‘latitude’);
    let cachedLon = localStorage.getItem(‘longitude’);
    cachedLat ? 
     this.setCoordsFromLocalStorage(cachedLat, cachedLon) :
     this.getCoords();
   }

   getCoords() {
    if (window.navigator.geolocation) { 
     navigator.geolocation.getCurrentPosition((position) => {
      localStorage.setItem(‘latitude’, position.coords.latitude);
      localStorage.setItem(‘longitude’, position.coords.longitude);
      this.callWeatherApi(position.coords.latitude,
                          position.coords.longitude,
                          “geo”)
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
    }, (error) => {
     this.setState({
      error: error.message,
     });
    });
    } 
   }

  localStorage.setItem(‘latitude’, position.coords.latitude);
  localStorage.setItem(‘longitude’, position.coords.longitude);
*/