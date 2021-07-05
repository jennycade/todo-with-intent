import React from 'react';

function Welcome(props) {
  const today = props.date.toLocaleDateString('en-us', { weekday: 'long' });
  return (
    <div>
      <h1>Welcome to { today }</h1>
      <caption>{ props.date.toLocaleDateString() }</caption>
    </div>
  );
}

export default Welcome;