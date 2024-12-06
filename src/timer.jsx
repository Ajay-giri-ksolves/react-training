import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isRunning: false,
    };
    this.timer = null;
  }

  startTimer() {
    if (!this.state.isRunning) {
      this.timer = setInterval(() => {
        this.setState({ time: this.state.time + 1 });
      }, 1000);
      this.setState({ isRunning: true });
    }
  }

  pauseTimer() {
    clearInterval(this.timer);
    this.setState({ isRunning: false });
  }

  resetTimer() {
    clearInterval(this.timer);
    this.setState({ time: 0, isRunning: false });
  }

  render() {
    return (
      <div>
        <h1>Timer: {this.state.time}s</h1>
        <button onClick={() => this.startTimer()}>Start</button>
        <button onClick={() => this.pauseTimer()}>Pause</button>
        <button onClick={() => this.resetTimer()}>Reset</button>
      </div>
    );
  }
}

export default Timer;
