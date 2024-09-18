import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Child extends Component {

  static propTypes = {
    name: PropTypes.string
  }

  static defaultProps = {
    name: ''
  }

  render() {
    console.log(Child.propTypes);
    return (
      <div>
        <p>I'm a child component! I'm expecting props of: </p>
        <code>
          {JSON.stringify({
            name: 'String'
          }, null, 2)}
        </code>
        <p>I received: {this.props.name}</p>
      </div>
    );
  }
}
