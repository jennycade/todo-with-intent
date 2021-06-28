import React, { useState, useContext } from 'react';
import { FirebaseContext } from './Firebase';

const SignupForm = (props) => {
  // PROPS
  const { setUser } = props;

  // CONTEXT
  const firebase = useContext(FirebaseContext);

  // STATE
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const [error, setError] = useState(null);

  // PROPS
  const { returnToMain } = props;

  const resetForm = () => {
    
    setUsername('');
    setEmail('');
    setPassword('');
    setPassword2('');
  }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  }
  const updateEmail = (e) => {
    setEmail(e.target.value);
  }
  const updatePassword = (e) => {
    setPassword(e.target.value);
  }
  const updatePassword2 = (e) => {
    setPassword2(e.target.value);
  }

  const checkValidity = () => {
    let valid = true;
    if (password !== password2) {
      valid = false;
    }
    if (email === '' || username === '' || password === '') {
      valid = false;
    }
    return valid;
  }

  const createUser = (e) => {
    e.preventDefault();

    firebase.doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        // log in!
        setUser(authUser);
        console.log(`You've signed up, ${username}!`);

        // clear the form and error
        resetForm();
        setError(null);

        returnToMain(); // TODO: Handle this with AuthPane instead (when user updates)
      })
      .catch((err) => {
        setError(err);
      });
  }

  return (
    <form className='SignupForm' onSubmit={ createUser }>
      { error && <p>Error: {error.message}</p> }
      <label>
        Username
        <input type='text'
          value={ username }
          onChange={ updateUsername } />
      </label>
      <label>
        Email
        <input type='email'
          value={ email }
          onChange={ updateEmail } />
      </label>
      <label>
        Password
        <input type='password'
          value={ password }
          onChange={ updatePassword } />
      </label>
      <label>
        Re-enter password
        <input type='password'
          value={ password2 }
          onChange={ updatePassword2 } />
      </label>
      <button type="Submit" disabled={!checkValidity()}>Sign up</button>
    </form>
  );
}

export default SignupForm;