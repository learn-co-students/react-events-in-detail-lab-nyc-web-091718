import React from 'react';
import ReactDOM from 'react-dom';

// var y = instanceOfMouseEvent.clientY


function CoordinatesButton(props) {

const handleClick = (event) => {
    props.onReceiveCoordinates([ event.clientX, event.clientY])

  }

  return (
    <button onClick={handleClick}></button>
  )

}


export default CoordinatesButton;
