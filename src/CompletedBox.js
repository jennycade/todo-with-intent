import React from 'react';

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import DoneIcon from '@material-ui/icons/Done';

const CompletedBox = (props) => {
  return (
    <span
      className = 'completed_box'
      onClick={ props.toggleTodoCompleted ? () => { props.toggleTodoCompleted(props.id) } : () => null }
    >
      { props.completed ? <DoneIcon /> : <CheckBoxOutlineBlankIcon /> }
    </span>
  );
}

export default CompletedBox;