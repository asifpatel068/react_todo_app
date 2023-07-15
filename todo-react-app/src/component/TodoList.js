import React, { useState } from 'react';
import TodoItem from './TodoItem';
import CreateTodo from './CreateTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
      <CreateTodo todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoList;
