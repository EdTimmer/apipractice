import React from 'react';

const API_KEY = "5abd98ed849a5414b5960c496cc31a3d";

class Weather extends React.Component {
  state = {
    errorMessage: "",
    temperature: "Loading...",
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined
  }

  componentDidMount() {
    this.getPosition()
    .then((position) => {      
      this.getWeather(position.coords.latitude, position.coords.longitude)
    })
    .catch((err) => {
      this.setState({ errorMessage: err.message});
    });
  }   

  getPosition = (options) => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }
  
  getWeather = async (lat, lon) => { 
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    this.setState({
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    })
    console.log('data in getWeather is: ', data)
  }
  render() {
    if (!this.state.icon) {
      return null;
    }
    return (
      <div>    
        <div><h2>City: {this.state.city}</h2></div>    
        <div><h2>Temperature: {this.state.temperature} &#8451;</h2></div>
        <div><h2>Humindity: {this.state.humidity} %</h2></div>
        <div><h2>{this.state.description}</h2></div>
        <img src={`http://openweathermap.org/img/w/${this.state.icon}.png`} />
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