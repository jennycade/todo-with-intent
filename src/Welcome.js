import React from 'react';

function Welcome(props) {
  const today = props.date.toLocaleDateString('en-us', { weekday: 'long' });
  return (
    <h1>Welcome to { today }</h1>
  );
}

export default Welcome;