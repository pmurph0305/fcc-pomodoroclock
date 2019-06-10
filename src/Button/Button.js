import React from 'react';

const Button = ({buttonId, label, onClick}) => {

  return (
    <button id={buttonId} onClick={onClick}>{label}</button>
  )

}

export default Button;