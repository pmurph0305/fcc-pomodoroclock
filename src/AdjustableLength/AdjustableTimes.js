import React from 'react';
import PropTypes from 'prop-types';


const AdjustableTimes = ({idValue, value, idLabel, label, idButtonDown, idButtonUp, onDecrement, onIncrement}) => {

  return(
    <div>
      <label htmlFor={idButtonDown} id={idLabel}>{label}</label>
      <button id={idButtonDown} onClick={onDecrement}>\/</button>
      <p id={idValue}>{value}</p>
      <button id={idButtonUp} onClick={onIncrement}>/\</button>
    </div>
  );

}

AdjustableTimes.propTypes = {
  idButtonDown: PropTypes.string,
  idButtonUp: PropTypes.string,
  idLabel: PropTypes.string,
  label: PropTypes.string,
  onDecrement: PropTypes.func,
  onIncrement: PropTypes.func,
}

export default AdjustableTimes;