import React from "react";
import Button from "./Button.js";
import ClockFace from "./ClockFace.js";

class Timer extends React.Component {
  // 1. Поля класса (вместо конструктора)
  state = {
    // Запущенный таймер (его ID)
    activeTimer: 0,
    // Оставшееся время в секундах
    timeLeft: 0,
  }

  // Метод запуска таймера
  startTimer = (seconds) => {
    // Если другой таймер уже запущен, очистить его
    clearInterval(this.state.activeTimer);

    // Создать и запустить новый таймер, выполняющийся каждую секунду
    const timerID = setInterval(() => {
      // Оставшееся количество секунд уменьшить на 1
      seconds = this.state.timeLeft - 1;
      // Если после этого оставшееся количество секунд = 0, очистить таймер
      if (seconds === 0) clearInterval(timerID);
      // Обновить состояние
      this.setState({timeLeft: seconds});
    }, 1000);

    // Начальные значения (количество секунд и ID созданного таймера)
    // --- Выполнится раньше тела таймера, так как таймер в первый раз 
    // --- ..выполняет действие только спустя секунду
    this.setState({timeLeft: seconds, activeTimer: timerID});
  }

  render() {
    return (
      <>
        <Button time="5" startTimer={this.startTimer} />
        <Button time="10" startTimer={this.startTimer} />
        <Button time="15" startTimer={this.startTimer} />
        <ClockFace timeLeft={this.state.timeLeft}/>
      </>
    )
  }
}

export default Timer;