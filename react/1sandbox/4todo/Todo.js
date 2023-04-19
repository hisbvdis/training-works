import React from "react";
import TodoItem from "./TodoItem.js";
import "./Todo.css";

class Todo extends React.Component {
  // 1. Поля класса (вместо конструктора)
  state = {
    // 1.1. Данные хранятся в виде массива объектов
    todos: [
      { id: 1, text: "Задача №1", completed: true  },
      { id: 2, text: "Задача №2", completed: false },
      { id: 3, text: "Задача №3", completed: false },
      { id: 4, text: "Задача №4", completed: true  },
      { id: 5, text: "Задача №5", completed: false },
    ]
  }

  // 2. Обработчик
  // 2.1. Принимает аргумент с "id" нажатого пункта
  handleTodoItemChange = (id) => {
    // 2.2. Перебрать массив, изменив значение элемента с нужным "id"
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })

    // 2.3. Обновить состояние новым массивом
    this.setState({
      todos: updatedTodos
    })
  }
  
  // 3. Рендеринг
  render() {
    return (
        // 3.1. Перебрать массив, сгенерировав из данных компоненты
      <>
        {this.state.todos.map(todo => (
          <TodoItem 
            // 3.2. Уникальные ключи для массива компонентов
            key={todo.id}
            // 3.3. Преобразование объекта с данными в набор свойств (атрибутов)
            {...todo}
            // 3.4. В дочерний компонент через свойство передаётся обработчик
            handler={this.handleTodoItemChange}
          />
        ))}
      </>
    )
  }
}

export default Todo;