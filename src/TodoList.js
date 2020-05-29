import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  return (
    <ul className="todo_list">
      { props.todos.map((todo) =>
      <Todo
        key={ todo.id }
        id={ todo.id }
        title={ todo.title }
        completed={ todo.completed }
        toggleTodoCompleted={ props.toggleTodoCompleted }
        removeTodo={ props.removeTodo }
        updateTodoTitle = { props.updateTodoTitle }
      />
      ) }
    </ul>
  );
}

export default TodoList;