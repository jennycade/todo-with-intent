import React from 'react';

import SignupForm from './SignupForm';

const AuthPane = (props) => {
  // TODO: Enable sign in, sign up, and sign out
  return (
    <div className='authPane'> 
      <SignupForm />
    </div>
  )
}

export default AuthPane;