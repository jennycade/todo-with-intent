import React, { useState } from 'react';
import './App.css';

import AuthPane from './AuthPane';
import DailyListPane from './DailyListPane';
import BucketPane from './BucketPane';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className = 'app'>
      <AuthPane user={ user } setUser={ setUser } />
      <DailyListPane />
      <BucketPane />
    </div>
  );
}

export default App;
