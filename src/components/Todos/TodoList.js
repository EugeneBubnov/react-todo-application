import styles from './TodoList.module.css';
import Todo from './Todo';

export default function TodoList({ todos, deleteTodo, toogleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2 style={{ color: 'white' }}>Todo list is empty</h2>}
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            toogleTodo={toogleTodo}
          />
        );
      })}
    </div>
  );
}
