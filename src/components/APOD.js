import React from 'react';
import Spinner from './Spinner';
import Media from './Media';

class APOD extends React.Component {
  state = {
    url: undefined,
    mediaType: undefined,
    title: undefined,
    explanation: undefined,
  }

  componentDidMount() {
    this.getNASA();
  }   

  getNASA = async () => {
    const api_call = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`);
    const data = await api_call.json();
    // console.log('nasa data: ', data)
    this.setState({
      url: data.url,
      mediaType: data.media_type,
      title: data.title,
      explanation: data.explanation,
    })
    // console.log('state is: ', this.state)
  }
  render() {
    console.log('state in APOD: ', this.state)
    const { mediaType, url, title, explanation } = this.state;
    return (
      <div>   
        <div className="image-heading-container">
          <a className="image-heading" href="https://apod.nasa.gov/apod/astropix.html" rel="noopener noreferrer" target="_blank">nasa astronomy picture of the day</a>
        </div>        
        {
          url ? 
            (<Media mediaType={mediaType} url={url} />)        
            : 
            (<Spinner />)
        }
        <div className="image-title">{title}</div>
        <div className="image-explanation">{explanation}</div>
      </div>
    )
  }
}

export default APOD;
