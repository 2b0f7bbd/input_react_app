import React from 'react';
const input = props => (
  <input
    type='text'
    onChange={props.userInputHandler}
    value={props.value}
  ></input>
);
export default input;
