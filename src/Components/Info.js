import React from 'react';

const info = props => {
  if (!props.hideInfo) {
    return (
      <React.Fragment>
        <p>
          {`Your text has ${props.input.length} symbols, 
          ${
            props.input.match(/[a-zA-Z]/g) === null
              ? 0
              : props.input.match(/[a-zA-Z]/g).length
          }
          characters and
          ${
            props.input.match(/[\d]/g) === null
              ? 0
              : props.input.match(/[\d]/g).length
          }
          numbers.`}
        </p>
      </React.Fragment>
    );
  } else {
    return null;
  }
};

export default info;
