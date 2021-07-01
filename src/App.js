import React, { useContext, useEffect, useState } from 'react';
import './App.css';

import { FirebaseContext } from './Firebase';

import AuthPane from './AuthPane';
import DailyListPane from './DailyListPane';
import BucketPane from './BucketPane';

const App = () => {
  // STATE
  const [signedIn, setSignedIn] = useState(null);

  // CONTEXT
  const firebase = useContext(FirebaseContext);
  
  useEffect(() => { // TODO: Fix this nonsense. Check out https://reactjs.org/docs/hooks-effect.html and https://johnwcassidy.medium.com/firebase-authentication-hooks-and-context-d0e47395f402
    const unsubscribe = firebase.onAuthStateChange(setSignedIn);
    return unsubscribe;
  }, []);



  return (
    <div className = 'app'>
      <AuthPane signedIn={ signedIn } setSignedIn={ setSignedIn } />
      <DailyListPane signedIn={ signedIn } />
      <BucketPane />
    </div>
  );
}

export default App;
