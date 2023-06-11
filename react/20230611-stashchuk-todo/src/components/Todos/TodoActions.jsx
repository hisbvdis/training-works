import ButtonLink from "../UI/ButtonLink/ButtonLink";
import styles from "./TodoActions.module.css";

const TodoActions = (props) => {
  const { removeAllTodos, removeSolvedTodos } = props;

  return (<>
    <div className={styles.todoActions}>
    <ButtonLink type="button" onClick={() => removeAllTodos()}>Remove all</ButtonLink>
    <ButtonLink type="button" onClick={() => removeSolvedTodos()}>Remove solved</ButtonLink>
    </div>
  </>)
}

export default TodoActions;
