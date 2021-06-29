import React, { useContext, useEffect, useState } from 'react';
import './App.css';

import { FirebaseContext } from './Firebase';

import AuthPane from './AuthPane';
import DailyListPane from './DailyListPane';
import BucketPane from './BucketPane';

const App = () => {
  // STATE
  const [user, setUser] = useState(null);

  // CONTEXT
  const firebase = useContext(FirebaseContext);

  // see if a user is logged in already
  // TODO: Make this work, or figure out why it's not working.
  // useEffect(() => {
  //   if (firebase.isUserSignedIn()) {
  //     // set user
  //     setUser(firebase.getCurrentUser());
  //     // TODO: Use onAuthStateChange instead: https://johnwcassidy.medium.com/firebase-authentication-hooks-and-context-d0e47395f402
  //   }
  // }, [firebase]);
  
  useEffect(() => {
    const unsubscribe = firebase.onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);



  return (
    <div className = 'app'>
      <AuthPane user={ user } setUser={ setUser } />
      <DailyListPane user={ user } />
      <BucketPane user={ user } />
    </div>
  );
}

export default App;
