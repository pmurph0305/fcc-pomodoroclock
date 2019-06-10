import React from 'react';

const TimeDisplay = ({timeMins, timeSecs}) => {
  
  const displayedTime = () => {
    return timeMins + ":" + (timeSecs < 10 ? "0"+timeSecs : timeSecs);
  }

  return (
    <p id="time-left">
      {displayedTime()}
    </p>
  );
}

export default TimeDisplay;