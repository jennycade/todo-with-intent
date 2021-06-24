import React from 'react';
import './App.css';

import DailyListPane from './DailyListPane';
import BucketPane from './BucketPane';

const App = () => {
  return (
    <div className = 'app'>
      <DailyListPane />
      <BucketPane />
    </div>
  );
}

export default App;
