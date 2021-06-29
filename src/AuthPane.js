import React, { useState, useContext } from 'react';

import { FirebaseContext } from './Firebase';

import SignupForm from './SignupForm';
import SigninForm from './SigninForm';

const AuthPane = (props) => {
  // PROPS
  const { user, setUser } = props;

  // CONTEXT
  const firebase = useContext(FirebaseContext);

  // STATE
  const [display, setDisplay] = useState('main');

  // FUNCTIONS
  const returnToMain = () => {
    setDisplay('main');
  }

  const signOut = () => {
    firebase.doSignOut().then(() => {
      console.log(`You're signed out.`);
      setUser(null);
    }).catch((error) => {
      console.log(error);
    });
  }

  let authComp = '';

  if (display === 'main') {
    if (user) {
      authComp = <p>Signed in as {firebase.getUserEmail()}. <button onClick={ signOut }>Sign out</button></p>;
    } else {
      authComp = (
      <p>
        <button onClick={() => setDisplay('signup')}>Sign up</button>
         or  
        <button onClick={() => setDisplay('signin')}>Sign in</button>
      </p>
      );
    }
  }

  if (display === 'signup') {
    authComp = <SignupForm setUser={ setUser } returnToMain={ returnToMain } />
  }
  if (display === 'signin') {
    authComp = <SigninForm setUser={ setUser } returnToMain={ returnToMain } />
  }

  
  // TODO: Enable sign in, sign up, and sign out
  return (
    <div className='authPane'> 
      { authComp }
    </div>
  )
}

export default AuthPane;