import React from 'react';
import Todo from './Todo.js';

export default function TodoList({ todos, toggleTodo }) {
  return (
    <div>
      Todo List:
      {console.log('TodoList props', todos)}
      {todos.map(todo => {
        return <Todo key={todo} todo={todo} toggleTodo={toggleTodo} />
      })}
    </div>
  )
}