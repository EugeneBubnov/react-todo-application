import { useState } from 'react';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import Header from './components/UI/Header';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosAction from './components/Todos/TodosAction';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodoHandler(text) {
    /**
     * [...todos, text] в текущий массив добавляем новый элемент text
     
    setTodos([...todos, text]);
    */
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };

    setTodos([...todos, newTodo]);
  }

  /* Логика filter тут: берём массив, 
   в коллбэк функции инициируем элемент и индекс,
   далее по условию возвращаем массив без переданного в функцию индекса */
  function deleteTodoHandler(id) {
    //setTodos(todos.filter((noUsingItem, idx) => idx !== index));
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  }

  function toogleTodoHandler(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  }

  function resetTodosHandler() {
    setTodos([]);
  }

  function deleteComplitedTodosHandler() {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  // Загрузка данных из Local Storage при загрузке страницы
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos); // Устанавливаем сохранённые задачи
  }, []);

  // Сохранение данных в Local Storage при изменении списка
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <Header />
      <main className="mainBlock">
        <TodoForm addTodo={addTodoHandler} />
        {todos.length ? (
          <TodosAction
            completedTodosExist={!!completedTodosCount}
            resetTodos={resetTodosHandler}
            deleteCompletedTodos={deleteComplitedTodosHandler}
          />
        ) : (
          <></>
        )}
        <TodoList
          todos={todos}
          deleteTodo={deleteTodoHandler}
          toogleTodo={toogleTodoHandler}
        />
        {completedTodosCount > 0 ? (
          <h2
            style={{ color: 'white', fontFamily: 'inherit' }}
          >{`You have completed ${completedTodosCount} ${
            completedTodosCount > 1 ? 'todos' : 'todo'
          }`}</h2>
        ) : (
          <></>
        )}
      </main>
    </div>
  );
}

export default App;
