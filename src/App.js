import React from 'react';

import AdjustableTimes from './AdjustableLength/AdjustableTimes'
import Button from './Button/Button'

import './App.css';

const initialState = {
  breakLength: 5,
  sessionLength: 25,
  timer: 25,
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onSessionDecrement = () => {
    console.log('session decrement click');
  }

  onBreakDecrement = () => {
    console.log('break decrement click');
  }

  onSessionIncrement = () => {
    console.log('session increment click');
  }

  onBreakIncrement = () => {
    console.log('break increment click');
  }

  onStartStopClick = () => {
    console.log('on start stop click');
  }

  onResetClick = () => {
    this.setState(initialState);
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
      
        <label htmlFor="" id="timer-label">Session</label>
        <p id="time-left">25:00</p>
        <Button buttonId="start_stop" onClick={this.onStartStopClick} label="SS"/>
        <Button buttonId="reset" onClick={this.onResetClick} label="Reset"/>
      </div>
    );
  }
}

export default App;
