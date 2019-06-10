import React from 'react';

import AdjustableTimes from './AdjustableLength/AdjustableTimes'
import Button from './Button/Button'
import TimeDisplay from './TimeDisplay/TimeDisplay'

import './App.css';

const initialState = {
  breakLength: 5,
  sessionLength: 25,
  timeLabel: "Session",
  timeMins: 25,
  timeSecs: 0,
  timerIsRunning: false,
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = initialState;
    this.timerTimeout = null;
  }

  onSessionDecrement = () => {
    if (this.state.sessionLength > 1) {
      this.setState({ sessionLength: this.state.sessionLength-1, timeMins: this.state.sessionLength-1})
    }
  }

  onBreakDecrement = () => {
    if (this.state.breakLength > 1) {
      this.setState({ breakLength: this.state.breakLength-1})
    }
  }

  onSessionIncrement = () => {
    if (this.state.sessionLength < 60) {
      this.setState({ sessionLength: this.state.sessionLength+1, timeMins: this.state.sessionLength+1})
    }
  }

  onBreakIncrement = () => {
    if (this.state.breakLength < 60) {
      this.setState({ breakLength: this.state.breakLength+1})
    }
  }

  onStartStopClick = () => {
    if (this.state.timerIsRunning === false) {
      this.setState({timerIsRunning: true});
      this.timerTimeout = setTimeout(this.onUpdateTimer, 1000);
    } else {
      this.setState({timerIsRunning: false})
    }
  }

  onResetClick = () => {
    this.setState(initialState);
  }
  
  onTimerFinished = () => {
    if(this.state.timeLabel === "Session") {
      this.setState({timeLabel: "Break"});
    }
  }

  onUpdateTimer = () => {
    if (this.state.timerIsRunning) {
      if (this.state.timeSecs === 0) {
        if (this.state.timeMins > 0) {
          this.setState({timeSecs: 59, timeMins: this.state.timeMins-1});
          this.timerTimeout = setTimeout(this.onUpdateTimer, 1000);
        } else {
          this.onTimerFinished();
        }
      } else {
        this.setState({timeSecs: this.state.timeSecs-1});
        this.timerTimeout = setTimeout(this.onUpdateTimer, 1000);
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerTimeout);
    this.timerTimeout = null;
  }

  render() {
    return (
      <div className="App">
        <AdjustableTimes 
          idLabel="break-label"
          label="Break Length"
          idButtonDown="break-decrement"
          idButtonUp="break-increment"
          idValue="break-length"
          value={this.state.breakLength}
          onDecrement={this.onBreakDecrement}
          onIncrement={this.onBreakIncrement}
        />
        <AdjustableTimes 
          idLabel="session-label"
          label="Session Length"
          idButtonDown="session-decrement"
          idButtonUp="session-increment"
          idValue="session-length"
          value={this.state.sessionLength}
          onDecrement={this.onSessionDecrement}
          onIncrement={this.onSessionIncrement}
        />
      
        <label htmlFor="" id="timer-label">{this.state.timeLabel}</label>
        <TimeDisplay timeMins={this.state.timeMins} timeSecs={this.state.timeSecs}/>
        <Button buttonId="start_stop" onClick={this.onStartStopClick} label="SS"/>
        <Button buttonId="reset" onClick={this.onResetClick} label="Reset"/>
      </div>
    );
  }
}

export default App;
