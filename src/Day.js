import React, { useState, useContext, useEffect } from 'react';
import Store from 'store';

import { FirebaseContext } from './Firebase';

import Welcome from './Welcome';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import './App.css';

const Day = (props) => {
  // PROPS
  const { date, signedIn } = props;

  // CONTEXT
  const firebase = useContext(FirebaseContext);

  // STATE
  // Date
  const dateString = date.toDateString();
  const [todos, setTodos] = useState([]);
  
  // TODO: Activate this again once I get it working.
  useEffect(() => {
    if (signedIn) {
      console.log('You are signed in'); // This never runs. Why?
      setTodos(firebase.getDateTodos(firebase.getUserID(), dateString));
    } else {
      console.log('For some reason, Day.js does not think you are signed in.');
    }
  }, [signedIn, dateString, firebase]);

  if (signedIn) {
    console.log('You are signed in'); // This also never runs.
    setTodos(firebase.getDateTodos(firebase.getUserID(), dateString));
  } else {
    console.log('For some reason, Day.js does not think you are signed in.');
  }

  const addTodo = (title) => {
    const newTodo = {
      id: getNextId(),
      title,
      completed: false,
      dateString,
    }
    const newTodos = [
      ...todos,
      newTodo,
    ];
    setTodos(newTodos);

    firebase.addTodo(newTodo);
  }

  const toggleTodoCompleted = (id) => {
    let newTodos = [...todos];
    const index = getIndexFromId(id);

    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    // Store.set(dateString, newTodos); // TODO: Convert to firebase
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