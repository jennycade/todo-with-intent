import React, { useState } from 'react';

const EditableText = (props) => {
  const [display, setDisplay] = useState('view');
  const [text, setText] = useState(props.text);

  if (display === 'view') {
    return (
      <span
        onClick = { () => { setDisplay('edit'); } }
        className = 'title'
      >
        { text }
      </span>
    );
  } else if (display === 'edit') {
    return (
      <form onSubmit={ (e) => {
        e.preventDefault();
        
        // send it up!
        props.updateText(text);
        setDisplay('view');
      }}>
        <input type='text'
          autoFocus
          data-lpignore="true"
          className = 'title input'

          value = { text }
          onChange = { (e) => { setText(e.target.value) } }
          onBlur = { () => {
            setDisplay('view');
            setText(props.text);
          } }
        />
      </form>
    );
  }
}

export default EditableText;
