import React, { useState, useContext } from 'react';
import { FirebaseContext } from './Firebase';

const SigninForm = (props) => {
  // CONTEXT
  const firebase = useContext(FirebaseContext);

  // STATE
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // PROPS
  const { returnToMain } = props;

  const resetForm = () => {
    setEmail('');
    setPassword('');
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  }
  const updatePassword = (e) => {
    setPassword(e.target.value);
  }

  const checkValidity = () => {

    let valid = true;
    if (email === '' || password === '') {
      valid = false;
    }
    return valid;
  }

  const signIn = (e) => {
    e.preventDefault();

    firebase.doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        console.log(`You've signed in, ${email}!`);
        resetForm();
        setError(null);
        returnToMain();
      })
      .catch((err) => {
        setError(err);
      });
    
  }

  return (
    <form className='SigninForm' onSubmit={ signIn }>
      { error && <p>Error: {error.message}</p> }
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
      <button type="Submit" disabled={!checkValidity()}>Sign in</button>
    </form>
  );
}

export default SigninForm;