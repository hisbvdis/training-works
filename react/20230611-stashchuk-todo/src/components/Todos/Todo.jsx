import { RiTodoFill, RiDeleteBin2Line, RiCheckFill } from "react-icons/ri";
import styles from "./Todo.module.css";

const Todo = (props) => {
  const { id, text, isDone } = props;
  const { removeTodo, toggleTodo } = props;

  return (
    <li key={id} className={`${styles.todo} ${isDone ? styles["todo--completed"] : ""}`}>
      <RiTodoFill className={styles.todoIcon}/>
      <span className={styles.todoText}>{text}</span>
      <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => removeTodo(id)}/>
      <RiCheckFill className={styles.checkIcon} onClick={() => toggleTodo(id)}/>
    </li>
  )
}

export default Todo;
