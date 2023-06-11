import Todo from "./Todo";
import styles from "./TodoList.module.css";

const TodoList = (props) => {
  const { todos } = props;
  const { toggleTodo, removeTodo } = props;

  return (
    <ul className={styles.todoList}>
      {!todos.length && <h3>There are not todos</h3>}
      {todos.map((todo) => <Todo key={todo.id} {...todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />)}
    </ul>
  )
}

export default TodoList;
