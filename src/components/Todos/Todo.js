import { RiDeleteBin2Line, RiEdit2Line, RiTodoFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';

export default function Todo({ todo, deleteTodo, toogleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <FaCheck
        className={styles.checkIcon}
        onClick={() => {
          toogleTodo(todo.id);
        }}
      />
      <RiDeleteBin2Line
        onClick={() => {
          deleteTodo(todo.id);
        }}
        className={styles.deleteIcon}
      />
    </div>
  );
}
