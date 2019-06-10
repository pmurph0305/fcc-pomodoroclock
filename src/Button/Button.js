import React from 'react';

const Button = ({id, label, onClick}) => {

  return (
    <button id={id} onClick={onClick}>{label}</button>
  )

}

export default Button;