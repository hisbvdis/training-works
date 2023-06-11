import { useState } from "react";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import "./App.css";
import TodoActions from "./components/Todos/TodoActions";


const App = () => {
  const [todos, setTodos] = useState([
    {id: 1, text: "Task 1", isDone: false},
    {id: 2, text: "Task 2", isDone: false},
    {id: 3, text: "Task 3", isDone: false}
  ]);
  
  const addTodo = (text) => {
    const newId = (todos?.at(-1)?.id || 0) + 1;
    const newText = text === "" ? `Task ${newId}` : text;
    setTodos(todos.concat({id: newId, text: newText, isDone: false}));
  }
  const toggleTodo = (id) => setTodos(todos.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone} : {...todo}));
  const removeTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
  const removeAllTodos = () => setTodos([]);
  const removeSolvedTodos = () => setTodos(todos.filter(({isDone}) => !isDone));
  
  return (<>
    <h1 className="title">Todo App</h1>
    <TodoForm todos={todos} addTodo={addTodo}/>
    <TodoActions todos={todos} removeAllTodos={removeAllTodos} removeSolvedTodos={removeSolvedTodos} />
    <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
  </>)
}

export default App;
