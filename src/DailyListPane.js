import React, { useState } from 'react';
import NavButton from './NavButton';
import './App.css';

import Day from './Day';

const DailyListPane = (props) => {
  // PROPS
  const { signedIn } = props;

  // STATE
  const [date, setDate] = useState(new Date());

  const prevDay = new Date();
  prevDay.setDate(date.getDate() - 1);

  const nextDay = new Date();
  nextDay.setDate(date.getDate() + 1);

  return (
    <div className='daily_list_pane'>
      <NavButton
        date = { prevDay }
        direction = 'prev'
        navigate = { setDate }
      />
      <Day
        key = { date.toDateString() }
        date = { date }
        signedIn = { signedIn }
      />
      <NavButton
        date = { nextDay }
        direction = 'next'
        navigate = { setDate }
      />
    </div>
  );
}

export default DailyListPane;
