import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const node = document.getElementById('root');

function Greeting(props) {
  return <div>Hello {props.for}!</div>
};

Greeting.propTypes = {
  for: PropTypes.string.isRequired
};

Greeting.defaultProps = {
  for: "friend"
};

ReactDOM.createRoot(node).render(<Greeting for="Mark" />);
