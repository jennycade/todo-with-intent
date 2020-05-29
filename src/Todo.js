import React from 'react';
import CompletedBox from './CompletedBox';

import DeleteIcon from '@material-ui/icons/Delete';
import EditableText from './EditableText';

const Todo = (props) => {
  return (
    <li 
      key = { props.id }
      className = { `todo${ props.completed ? ' completed' : '' }`}
    >
      <CompletedBox
        id = { props.id }
        completed = { props.completed }
        toggleTodoCompleted = { props.toggleTodoCompleted }
      />
      <EditableText
        text = { props.title }
        updateText = { (text) => { props.updateTodoTitle(props.id, text); } }
      />
      <button
        onClick = { () => { props.removeTodo(props.id) } }
        className = 'delete_button'
      ><DeleteIcon /></button>
    </li>
  );
}

export default Todo;