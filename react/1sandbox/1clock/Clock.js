import React from "react";
import AnalogDisplay from "./AnalogDisplay.js";
import DigitalDisplay from "./DigitalDisplay.js";
import "./Clock.css";

class Clock extends React.Component {
  // 1. Поля класса (вместо конструктора)
  state = {
    currentTime: new Date()
  }

  // 2. После добавления компонента на страницу
  componentDidMount() {
    // 2.1. Создать интервал, который будет каждую секунду обновлять состояние
    // .... компонента, устанавливая новую текущую дату
    this.timerID = setInterval(
      () => this.setState({currentTime: new Date()}),
      1000
    )
  }

  // 3. Перед удалением компонента со страницы
  componentWillUnmount() {
    // 3.1. Удалить ранее созданный интервал  (чтобы не было утечек памяти)
    clearInterval(this.timerID);
  }

  // 4. В итоге компонент отображает текущее время на основании данных
  // .. состояния и обновляет его, когда обновляется состояние
  render() {
    return (
      <>
        <AnalogDisplay time={this.state.currentTime}/>
        <DigitalDisplay time={this.state.currentTime}/>
      </>
    )
  }
}

export default Clock;