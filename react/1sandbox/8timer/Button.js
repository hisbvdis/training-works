import React from "react";

class Button extends React.Component {
  // Внутренний обработчик события клика, который вызывает
  // ..переданную извне функцию запуска таймера
  clickHandler = () => {
    this.props.startTimer(this.props.time)
  }

  render() {
    return (
      <button onClick={this.clickHandler}>{this.props.time} seconds</button>
    )
  }
}

export default Button;