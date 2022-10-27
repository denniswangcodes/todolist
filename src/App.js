// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import TodoList from './TodoList.js';

function App() {
  const [todo, setTodo] = useState([])
  
  return (
    <>
      <TodoList /> <br></br>
      <input type="text" />
      <button>Add Todo</button> <br></br>
      <button>Clear Todo</button>
      <button>Clear Complete</button>
    </>
  )
}

export default App;
