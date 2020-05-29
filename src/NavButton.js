import React from 'react';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const NavButton = (props) => {
  return (
    <button
      className = 'nav_button'
      onClick = { () => { props.navigate(props.date) } }
    >{ (props.direction === 'prev') ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon /> }</button>
  );
}

export default NavButton;