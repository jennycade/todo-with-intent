import React from 'react';

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import DoneIcon from '@material-ui/icons/Done';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CloseIcon from '@material-ui/icons/Close';

const CompletedBox = (props) => {
  return (
    <span
      className = 'completed_box'
      onClick={ () => { props.toggleTodoCompleted(props.id) } }
    >
      { props.completed ? <DoneIcon /> : <CheckBoxOutlineBlankIcon /> }
    </span>
  );
}

export default CompletedBox;