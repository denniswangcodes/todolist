// import logo from './logo.svg';
// import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList.js';
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY = 'todoAdd.todos';

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef();

  useEffect(() => {
    console.log('app refreshed!')
    const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log('storedTodos', JSON.parse(storedTodos))
    if (storedTodos) setTodos(JSON.parse(storedTodos));
  }, [])

  useEffect(() => {
    console.log('todos updated!')
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    console.log('newTodos', JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id = id)
    todo.complete = !todo.complete;
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    })
    todoNameRef.current.value = null;
  }

  function handleClearComplete() {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }

  function handleClearAll() {
    setTodos([]);
  }

  return (
    <>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearComplete}>Clear Complete</button>
      <button onClick={handleClearAll}>Clear All</button><br></br>
      <div>There are {todos.filter(todo => !todo.complete).length} todos left.</div> <br></br><br></br>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  )
}

export default App;
