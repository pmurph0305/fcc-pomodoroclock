import React from 'react';

import AdjustableTimes from './AdjustableLength/AdjustableTimes'
import Button from './Button/Button'

import './App.css';

class App extends React.Component {
  

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
    console.log('on reset click');
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
          value={5}
          onDecrement={this.onBreakDecrement}
          onIncrement={this.onBreakIncrement}
        />
        <AdjustableTimes 
          idLabel="session-label"
          label="Session Length"
          idButtonDown="session-decrement"
          idButtonUp="session-increment"
          idValue="session-length"
          value={25}
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
