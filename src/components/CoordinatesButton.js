import React from 'react'

export default function CoordinatesButton(props) {
  let handleClick = (e) => {

    props.onReceiveCoordinates([e.clientX, e.clientY])



  }

  return (
    <div>
      <button onClick={handleClick}>press me </button>
    </div>
  )
}
