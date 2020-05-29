import React, { useState } from 'react';

const AddTodoForm = (props) => {
  const [title, setTitle] = useState('');

  return (
    <form onSubmit={ (e) => {
      e.preventDefault();
      props.addTodo(title);
      setTitle('');
    }}>
      <label
        className = 'label'
      >{ props.prompt }</label>
      <input type="text"
        className = 'input'
        data-lpignore="true"
        value={ title }
        onChange={ (e) => setTitle(e.target.value) }  
      ></input>
    </form>
  );
}

export default AddTodoForm;