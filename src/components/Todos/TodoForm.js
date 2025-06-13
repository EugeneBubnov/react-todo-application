import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  function onSubmitHandler(e) {
    e.preventDefault();

    if (text === '' || text === null) {
      alert('Поле не может быть пустым');
    } else {
      addTodo(text);
      console.log(text);
      setText('');
    }
  }

  return (
    <form className={styles.formInput} onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="todo-input"
        placeholder="Enter new todo"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Button type="submit" title="Submit">
        Submit
      </Button>
    </form>
  );
}
