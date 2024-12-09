import React, { useReducer, useState } from 'react';

// Reducer function
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload }];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.payload);
    case 'EDIT_TODO':
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
    case 'delete_All':
      return [];
    default:
      return state;
  }
};

function NewReducer() {
  const initialTodos = [
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Write code' },
  ];

  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [newTodo, setNewTodo] = useState('');
  const [editTodo, setEditTodo] = useState({ id: null, text:''});

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    setNewTodo('');
  };

  const removeTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };

  const startEditing = (id, text) => {
    setEditTodo({ id, text });
  };

  const saveEdit = (id, newText) => {
    if (newText.trim() === '') return;
    dispatch({ type: 'EDIT_TODO', payload: { id, text: newText } });
    setEditTodo({ id: null, text: '' });
  };

  const deleteAll=()=>{
    dispatch({type:'delete_All'});
  }
  const handleKeyPress=(e)=>{
    if(e.key==='Enter'){
      addTodo();
    }
  }
  const handleKeyPressSave=(e,id)=>{
    if(e.key==='Enter'){
      saveEdit(id,editTodo.text);
    }
  }
  return (
    <div>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} onKeyPress={handleKeyPress}/>
      <button className='btn btn-primary m-1' onClick={addTodo} >Add Todo</button>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={todo.id}>
              <td>{index + 1}</td>
              <td>
                {todo.id === editTodo.id ? (
                  <input
                    type="text"
                    value={editTodo.text}
                    onChange={(e) => setEditTodo({ id: todo.id, text: e.target.value })}
                    onKeyPress={(e)=>handleKeyPressSave(e,todo.id)}
                  />
                ) : (
                  todo.text
                )}
              </td>
              <td>
                {todo.id === editTodo.id ? (
                  <button className='btn btn-primary m-1' onClick={() => saveEdit(todo.id, editTodo.text)}>Save</button>
                ) : (
                  <>
                    <button className='btn btn-primary m-1' onClick={() => startEditing(todo.id, todo.text)}>Edit</button>
                    <button className='btn btn-primary m-1' onClick={() => removeTodo(todo.id)}>Remove</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='btn btn-primary' onClick={deleteAll}>Delete All</button>
    </div>
  );
}

export default NewReducer;
