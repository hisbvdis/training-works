import React from "react";
import Button from "./Button.js";

class ButtonClicker extends React.Component {
  // 1. Поля класса (вместо конструктора)
  state = {
    // 1.1. В объекте состояния объявить свойство с начальным значением
    value: 0
  }

  // 3. Обработчик события нажатий, изменяющий состояние
  // 3.1. Обработчик №1: Задать новое значение
  setValue = () => {
    this.setState({value: 1})
  }
  // 3.2. Обработчик №2: Изменить текущее значение, увеличив на 1
  increaseValue = () => {
    this.setState(prevState => ({
      value: prevState.value + 1
    }))
  }

  // 4. Рендеринг
  render() {
    return (
      <>
        {/* 4.1. Отображение значения из свойства состояния */}
        <h1>Текущее значение: {this.state.value}</h1>

        {/* 4.2. Дочерние компоненты с передачей разных свойств */}
        <Button name="Задать 1" handler={this.setValue} />
        <Button name="Увеличить на 1" handler={this.increaseValue} />
      </>
    )
  }
}


export default ButtonClicker;