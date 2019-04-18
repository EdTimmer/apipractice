import React from 'react';
import { resolve } from 'dns';
// import { resolve } from 'path';

const API_KEY = "5abd98ed849a5414b5960c496cc31a3d";

// const lon = getLocation2.coords.longitude;
// let lat;
// let lon;
let coords = "my initial string";

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
    // console.log(this.getLocationWrapper())
    // let that = this;
    console.log('getLocation is: ', this.getLocation())
    this.getLocation()
    .then((res) => this.getWeather(coords["lat"], coords["lon"]))


    // let firstFunc = async() => {
    //   let one = await that.getLocationWrapper();
    //   return one;
      
    //   // .then(() => console.log("HEH"));
    // }
    // firstFunc().then((res) => console.log('res is: ', res))
    // firstFunc().then((res) => console.log('res is: ', res))
    
    // .then(() => console.log("CALLED"))
    // secondFunc();
    // this.getWeather(coords["lat"], coords["lon"])
    // .then((res) => this.getWeather(res["lat"], res["lon"]))
    // .then(() => console.log('I got called'))
    // .then(res => console.log('res is: ', res))
    // fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.lon}&appid=${API_KEY}&units=metric`)
    // .then((res) => res.json())
    // .then((data) => console.log('data in the componentDidMount is: ', data))
    // const getCoords = new Promise((res, rej) => {
    //     // this.getLocation()
    //     res(this.getLocation());
    //     // let coordsResult = [lat, lon]
    //     // return coordsResult;
      
    // })

    // getCoords
    // .then((res) => console.log('lat after coords call is: ', lat))
    // .then((res) => this.getWeather(res["lat"], res["lon"]))
    // .then(res => console.log('res is: ', res))
    // .then(() => console.log('coords got called'))
    // .then(() => {
    //   fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&${this.props.lon}&appid=${API_KEY}&units=metric`)
    //   .then((res) => res.json())
    //   .then((data) => console.log('data in componentDidMount is: ', data))

    // } )
    
    
    // console.log('coords is: ', coords)
    // const myFunc = async() => {
    //   await coords;
    //   await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&${this.props.lon}&appid=${API_KEY}&units=metric`)


    //   .then((res) => res.json())
    //   .then((data) => console.log('data in componentDidMount is: ', data))
    // }
    // myFunc()
    

    // .then((data) => this.setState({temperature: data.main.temp}))
    // .then((data) => console.log('data in the componentDidMount is: ', data))
  }
      // window.navigator.geolocation.getCurrentPosition(
      //   position => this.setState({
      //     lat: position.coords.latitude,
      //     lon: position.coords.longitude
      //   }),
      //   err => this.setState({ errorMessage: err.message})
      // )
      // console.log('this.state.lat in componentDidMount: ', this.state.lat)
      // console.log('this.props.lat in componentDidMount: ', this.props.lat)
      // if (this.state.lat) {
      //   this.getWeather()
      // }
    
    // window.navigator.geolocation.getCurrentPosition(
    //   position => this.setState({
    //     lat: position.coords.latitude,
    //     lon: position.coords.longitude
    //   }),
    //   err => this.setState({ errorMessage: err.message})
    // )

    // .then(() => {
      // fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.lon}&appid=${API_KEY}&units=metric`)
      // .then((res) => res.json())
      // .then((data) => console.log('data in the componentDidMount is: ', data))
      // const data = api_call.json();
    // })


    // console.log(this.state.lat)
    // .then(() => this.getWeather())
  
  secondFunc = () => {
    console.log('i am 2')
  }
    
  getLocationWrapper = () => {
    return new Promise ((res, rej) => {
      
      //  resolve("success");
      
      resolve(this.getLocation());
      return resolve;
      // console.log('result is: ', result)
      // return result;
      
    })
  }

  

  getLocation = async () => {
    console.log('getLocation got called')

    let p = new Promise ((res, rej) => {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position.coords.latitude)
          coords = {
            lat: position.coords.latitude, 
            lon: position.coords.longitude
          }
        } 
      )
        res(coords);
        return res;
    }
    )
    return p;
    
  }

    
  
    


  getWeather = async (a, b) => {    
    // e.preventDefault();
    console.log("getWeather got called")
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${b}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    // this.setState({temperature: data.main.temp})
    console.log('data in getWeather is: ', data)
  }

  render() {
    if (!this.props.lat) {
      return null;
    }
    // console.log('props in render in Weather: ', this.props)
    console.log('state in render is: ', this.state)
    return (
      <div>
        
        <button onClick={() => this.getWeather(coords["lat"], coords["lon"])}>get weather</button>
        <div>{this.state.temperature}</div>
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