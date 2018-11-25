import React from 'react'

class DelayedButton extends React.Component {

  handleOnClick = (event) => {
    setTimeout(() => {
      event.persist()
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.handleOnClick}>Delay Button</button>
    )
  }

}

export default DelayedButton
