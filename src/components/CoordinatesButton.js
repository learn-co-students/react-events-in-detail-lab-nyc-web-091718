// Code CoordinatesButton Component Here

import React, {Component} from 'react';

export default class CoordinatesButton extends Component {

  createArray = (event) =>{
    let coordinates = [event.screenX, event.screenY]
    this.props.onReceiveCoordinates(coordinates)
  }
  render() {
    return <button onClick={this.createArray}>Coordinates</button>
  }


}
