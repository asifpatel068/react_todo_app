import React from 'react';

const TodoItem = ({ todo, todos, setTodos }) => {
  const handleComplete = () => {
    const updatedTodos = todos.map(item => {
      if (item.id === todo.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  const handleDelete = () => {
    const updatedTodos = todos.filter(item => item.id !== todo.id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <button onClick={handleComplete}>
        {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
