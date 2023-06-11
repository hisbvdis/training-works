import { useState } from "react";
import ButtonLink from "../UI/ButtonLink/ButtonLink";
import styles from "./TodoForm.module.css";

const TodoForm = (props) => {
  const [text, setText] = useState("");
  const { addTodo } = props;
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo(text);
    setText("");
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter todo" value={text} onChange={(evt) => setText(evt.target.value)}/>
      <ButtonLink>Add</ButtonLink>
    </form>
  )
}

export default TodoForm;
