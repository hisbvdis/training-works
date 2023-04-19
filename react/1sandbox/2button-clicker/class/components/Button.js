import React from "react";

// Компонент кнопки с минимальным функционалом
const Button = ({handler, name}) => (
  <button onClick={handler}>{name}</button>
)

export default Button;