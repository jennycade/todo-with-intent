import React, { useState, useContext } from 'react';

import { FirebaseContext } from './Firebase';

import SignupForm from './SignupForm';
import SigninForm from './SigninForm';

const AuthPane = (props) => {
  const firebase = useContext(FirebaseContext);

  const [display, setDisplay] = useState('main');

  const returnToMain = () => {
    setDisplay('main');
  }
  const signOut = () => { // TODO: Make this work
    firebase.doSignOut().then(() => {
      setDisplay('main');
    });
    // setDisplay('main');
  }

  let authComp = '';

  if (display === 'main') {
    if (firebase.isUserSignedIn()) {
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
    authComp = <SignupForm returnToMain={returnToMain} />
  }
  if (display === 'signin') {
    authComp = <SigninForm returnToMain={returnToMain} />
  }

  
  // TODO: Enable sign in, sign up, and sign out
  return (
    <div className='authPane'> 
      { authComp }
    </div>
  )
}

export default AuthPane;