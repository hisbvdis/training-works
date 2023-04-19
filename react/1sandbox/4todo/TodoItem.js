import React from "react";

const TodoItem = ({id, text, completed, handler}) => (
  <label>
    <input
      type="checkbox"
      checked={completed}
      // При изменении чекбокса вызвать обработчик, передав в него "id" элемента
      onChange={() => handler(id)}
    />
    <span>{text}</span>
  </label>
)

export default TodoItem;