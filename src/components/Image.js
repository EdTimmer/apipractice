import React from 'react';

class Image extends React.Component {
  state = {
    imageURL: "",
    title: "",
    explanation: "",
  }

  componentDidMount() {
    this.getNASA();
  }   

  getNASA = async () => {
    const api_call = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`);
    const data = await api_call.json();
    this.setState({
      imageURL: data.url,
      title: data.title,
      explanation: data.explanation,
    })
    console.log('data in NASA call: ', data)
  }
  render() {
    const { imageURL, title, explanation } = this.state;
    return (
      <div>   
        <div className="image-heading-container">
          <a className="image-heading" href="https://apod.nasa.gov/apod/astropix.html" rel="noopener noreferrer" target="_blank">NASA Astronomy Picture Of The Day</a>
        </div>        
        {
          imageURL ? 
            (<a className="image-heading" href="https://apod.nasa.gov/apod/astropix.html" rel="noopener noreferrer" target="_blank"><img className="image" src={imageURL} alt="astronomy_picture_of_the_day" /></a>)        
            : 
            (<span>Loading...</span>)
        }
        <div className="image-title">{title}</div>
        <div className="image-explanation">{explanation}</div>
      </div>
    )
  }
}

export default Image;

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