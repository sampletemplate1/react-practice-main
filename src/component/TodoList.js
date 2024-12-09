import React, { useState } from 'react';

function TodoList() {
  // Step 1: Create a state variable to store todo list items
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', isEditing: false },
    { id: 2, text: 'Write code', isEditing: false },
  ]);

  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return; // Don't add empty todos

    // Create a new todo object
    const newTodoItem = {
      id: todos.length + 1, // You might want to use a more robust method for generating unique IDs
      text: newTodo,
    };

    // Add the new todo to the list
    setTodos([...todos, newTodoItem]);

    // Clear the input field
    setNewTodo('');
  };

  // Step 2: Render the todo list items
  const todoItems = todos.map((todo) => (
    <div key={todo.id}>
      {todo.isEditing ? (
        // Editing mode
        <>
          <input
            type="text"
            value={todo.text}
            onChange={(e) => handleEditChange(e, todo.id)}
          />
          <button onClick={() => saveEdit(todo.id)}>Save</button>
        </>
      ) : (
        // Display mode
        <>
          {todo.text}
          <button onClick={() => startEditing(todo.id)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </div>
  ));

  // Step 3: Function to start editing
  const startEditing = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isEditing: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // Step 4: Function to save the edited item
  const saveEdit = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isEditing: false };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // Function to handle edit input change
  const handleEditChange = (e, id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: e.target.value };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // Function to delete a todo item
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  const deleteAll = () => {
    setTodos([]);
  };

  return (
    <>
    <div>
      <h2>Todo List</h2>
      {todoItems}
    </div>
    <div>
    <input
      type="text"
      placeholder="New Todo"
      value={newTodo}
      onChange={handleInputChange}
    />
    <button onClick={handleAddTodo}>Add Todo</button>
  </div>
  <button className="btn btn-primary mb-3" onClick={deleteAll}>
            Delete all list
          </button>
</>
  );
}

export default TodoList;
