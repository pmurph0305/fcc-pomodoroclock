import React from 'react';

import AdjustableTimes from './AdjustableLength/AdjustableTimes'

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
      </div>
    );
  }
}

export default App;
