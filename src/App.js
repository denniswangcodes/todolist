// import logo from './logo.svg';
// import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList.js';

function App() {
  const [todos, setTodos] = useState([{ id: 1, name: 'Todo 1', complete: true }, { id: 1, name: 'Todo 1', complete: false }])
  const todoNameRef = useRef();

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos(prevTodos => {
      return [...prevTodos, { id: 1, name: name, complete: false }];
    })
    todoNameRef.current.value = null;
  }

  return (
    <>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Todo</button>
      <button>Clear Complete</button><br></br>
      There are {todos.length} todos. <br></br><br></br>
      <TodoList todos={todos} />
    </>
  )
}

export default App;
