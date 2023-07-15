import React, { useState } from 'react';

const CreateTodo = ({ todos, setTodos }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

    const newTodo = {
      id: newId,
      title: title,
      description: description,
      completed: false,
    };

    setTodos(prevTodos => [...prevTodos, newTodo]);

    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h2>Create Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateTodo;
