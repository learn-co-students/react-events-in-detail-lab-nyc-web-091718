// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  constructor(){
    super()
  }

  handleClick = (event) => {
    // console.log(`X: ${event.clientX}\nY: ${event.clientY}`)
    // let cor = {x: event.clientX, y: event.clientY};
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return(
      <button
        onClick={this.handleClick}/>
    )
  }
}
