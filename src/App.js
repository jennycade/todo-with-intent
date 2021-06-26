import React from 'react';
import './App.css';

import AuthPane from './AuthPane';
import DailyListPane from './DailyListPane';
import BucketPane from './BucketPane';

const App = () => {


  return (
    <div className = 'app'>
      <AuthPane />
      <DailyListPane />
      <BucketPane />
    </div>
  );
}

export default App;
