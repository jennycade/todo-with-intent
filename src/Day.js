import React, { useState } from 'react';
import Store from 'store';

import Welcome from './Welcome';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import './App.css';

const Day = (props) => {
  const date = props.date;
  const dateString = date.toDateString();

  // pull from localStorage if present
  const [todos, setTodos] = useState(Store.get(dateString) || []); // TODO: Get this from firebase instead!

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
      
    Store.set(dateString, newTodos); // TODO: Convert to Firebase
  }

  const toggleTodoCompleted = (id) => {
    let newTodos = [...todos];
    const index = getIndexFromId(id);

    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    Store.set(dateString, newTodos); // TODO: Convert to firebase
  }

  const removeTodo = (id) => {
    let newTodos = [...todos];
    const index = getIndexFromId(id);

    newTodos.splice(index, 1);
    setTodos(newTodos);
    Store.set(dateString, newTodos); // TODO: Convert to firebase
  }

  const updateTodoTitle = (id, newTitle) => {
    let newTodos = [...todos];
    const index = getIndexFromId(id);

    newTodos[index].title = newTitle;
    setTodos(newTodos);
    Store.set(dateString, newTodos); // TODO: Convert to firebase
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
    <div className="day">
      <Welcome
        date = { date } />
      <AddTodoForm addTodo={ addTodo }
        prompt = { 'What would you like to do today?' }
      />
      <TodoList todos={ todos }
        toggleTodoCompleted={ toggleTodoCompleted }
        removeTodo={ removeTodo }
        updateTodoTitle = { updateTodoTitle }
      />
    </div>
  );
}

export default Day;