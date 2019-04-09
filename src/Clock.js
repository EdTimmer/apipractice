import React from 'react';
import moment from 'moment';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      date: moment().format("MMMM", "DD", "YYYY").toString(),    
      day: moment().format("dddd").toString(),
      hour: moment().format("hh").toString(),
      minute: moment().format("mm").toString(),
      second: moment().format("ss").toString(),
      ampm: moment().format("A").toString(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({   
      date: moment().format("MMMM DD YYYY").toString(), 
      day: moment().format("dddd").toString(), 
      hour: moment().format("hh").toString(),
      minute: moment().format("mm").toString(),
      second: moment().format("ss").toString(),
      ampm: moment().format("A").toString(),
    });
  }

  render() {
    const { date, day, hour, minute, second, ampm } = this.state;
    return (
      <div className="display">
        <div className="date">{day}</div>
        <div className="date">{date}</div>
      
        <div className="clock">        
          <div className="clock-element-main">{hour}</div>
          <div className="clock-element-colon">:</div>
          <div className="clock-element-main">{minute}</div>
          <div className="clock-element-colon">:</div>
          <div className="clock-element-main">{second}</div>
          <div className="clock-element-main">{ampm}</div>
        </div>
      
      </div>

    );
  }
}

export default Clock;