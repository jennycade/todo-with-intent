import React, { useState } from 'react';
import Store from 'store';

import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const Bucket = (props) => {
  const bucketName = props.bucketName;
  const [todos, setTodos] = useState(Store.get(bucketName) || []); // TODO: Convert to firebase
  
  const addTodo = (title) => {
    const newTodos = [
      ...todos,
      {
        id: getNextId(),
        title,
        completed: false,
      }
    ];
    setTodos(newTodos);
      
    Store.set(bucketName, newTodos); // TODO: Convert to firebase
  }

  const removeTodo = (id) => {
    let newTodos = [...todos];
    const index = getIndexFromId(id);

    newTodos.splice(index, 1);
    setTodos(newTodos);
    Store.set(bucketName, newTodos); // TODO: Convert to firebase
  }

  const updateTodoTitle = (id, newTitle) => {
    let newTodos = [...todos];
    const index = getIndexFromId(id);

    newTodos[index].title = newTitle;
    setTodos(newTodos);
    Store.set(bucketName, newTodos); // TODO: Convert to firebase
  }

  const getIndexFromId = (id) => { // TODO: use findIndex() instead
    for(let i=0; i<todos.length; i++) {
      if (todos[i].id === id) {
        return i;
      }
    }
    return -1;
  }

  const getNextId = () => {
    // find highest id in todos
    const highestId = todos.reduce(
      (highestPrev, currentTodo) => { return Math.max(highestPrev, currentTodo.id) }, -1);
    return highestId + 1;
  }

  return (
    <div className = 'bucket'>
      <h1>{ bucketName }</h1>
      <TodoList todos={ todos }
        removeTodo={ removeTodo }
        updateTodoTitle = { updateTodoTitle }
      />
      <AddTodoForm addTodo={ addTodo }
        prompt = { 'What else do you need to do?' }
      />
    </div>
  );
}

export default Bucket;