import React from 'react';
import { bool } from 'prop-types';

function Display(props) {
  return (
    <div className="display">
      <h1>Display</h1>
      <div>{props.isLocked ? 'Locked' : 'Unlocked'}</div>
      <div>{props.isOpen ? 'Open' : 'Closed'}</div>
    </div>
  );
}

Display.propTypes = {
  isLocked: bool.isRequired,
  isOpen: bool.isRequired,
};

export default Display;