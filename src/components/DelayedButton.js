import React from 'react';
import ReactDOM from 'react-dom';

class DelayedButton extends React.Component{
  handleClick = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render(){
  return (
    <button onClick={this.handleClick}>Delayed</button>
  )
}

} //end of class


export default DelayedButton;// Code DelayedButton Component Here
