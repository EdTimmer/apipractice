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
    icon: undefined,
    sunrise: undefined,
    sunset: undefined,
  }

  componentDidMount() {
    if (navigator.geolocation) {
      this.timerID = setInterval(
        () => this.tick(),
        300000
      );
      this.getPosition()
      .then((position) => {      
        this.getWeather(position.coords.latitude, position.coords.longitude)
      })
      .catch((err) => {
        this.setState({ errorMessage: err.message });
      });
    }
    else {
      alert("Geolocation not available")
    }   
  }   

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.getPosition()
    .then((position) => {      
      this.getWeather(position.coords.latitude, position.coords.longitude)
    })
    .catch((err) => {
      this.setState({ errorMessage: err.message });
    });
  }

  getPosition = (options) => {
    // console.log('getPosition run')
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }
  
  getWeather = async (lat, lon) => { 
    // console.log('getWeather run')
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    this.setState({
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      sunrise: this.getTimeFromUnixTimeStamp(data.sys.sunrise),
      sunset: this.getTimeFromUnixTimeStamp(data.sys.sunset),
    })
    // console.log('data in getWeather is: ', data)
  }

  getTimeFromUnixTimeStamp = (unix_timestamp) => {
    let date = new Date(unix_timestamp*1000);
    // Hours part from the timestamp
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    let seconds = "0" + date.getSeconds();
    // Will display time in 10:30:23 format
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
  }

  render() {
    return (
      <div className="weather">   
        <div className="weather-line">
          <span className="weather-item">{this.state.city}</span>    
          <span className="weather-item">{this.state.temperature} &#8451;</span>
          <span className="weather-item">{this.state.humidity}% humidity</span>
          <span className="weather-item">{this.state.description}</span>
        </div>         
        {/*<br />
        <img src={`http://openweathermap.org/img/w/${this.state.icon}.png`} />*/} 
        <div className="weather-line">
          <span className="weather-item">sunrise: {this.state.sunrise}</span>
          <span className="weather-item">sunset: {this.state.sunset}</span>
        </div>       
        
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