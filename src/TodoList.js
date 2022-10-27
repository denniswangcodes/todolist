import React from 'react';
import Todo from './Todo.js';

export default function TodoList({ todos }) {
  return (
    <div>
      Todo List:
      {todos.map(todo => {
        return <Todo key={todo} todo={todo} />
      })}
    </div>
  )
}