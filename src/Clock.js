import React from 'react';
import moment from 'moment';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      hour: moment().format("hh").toString(),
      minute: moment().format("mm").toString(),
      second: moment().format("ss").toString(),
      ampm: moment().format("a").toString(),
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
      date: new Date(),
      hour: moment().format("hh").toString(),
      minute: moment().format("mm").toString(),
      second: moment().format("ss").toString(),
      ampm: moment().format("a").toString(),
    });
  }

  render() {
    const { hour, minute, second, ampm } = this.state;
    return (
      <div className="clock">        
        <div className="clock-element-main">{hour}</div>
        <div className="clock-element-colon">:</div>
        <div className="clock-element-main">{minute}</div>
        <div className="clock-element-colon">:</div>
        <div className="clock-element-main">{second}</div>
        <div className="clock-element-main">{ampm}</div>
      </div>
    );
  }
}

export default Clock;