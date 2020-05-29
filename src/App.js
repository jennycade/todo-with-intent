import React, { useState } from 'react';
import './App.css';

import DailyListPane from './DailyListPane';
import BucketPane from './BucketPane';

const App = () => {
  const [message, setMessage] = useState('');
  const addToToday = (title) => {

  }
  return (
    <div className = 'app'>
      <DailyListPane />
      <BucketPane />
    </div>
  );
}

export default App;
