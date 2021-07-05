import React, { useState } from 'react';
import NavButton from './NavButton';
import './App.css';

import dayjs from 'dayjs';

import Day from './Day';

const DailyListPane = (props) => {
  // PROPS
  const { signedIn } = props;

  // STATE
  const [date, setDate] = useState(new Date());



  let prevDay = dayjs(date);
  prevDay = prevDay.subtract(1, 'day');
  prevDay = new Date(prevDay);

  let nextDay = dayjs(date);
  nextDay = nextDay.add(1, 'day');
  nextDay = new Date(nextDay);


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
