import React, { Component } from 'react';
import Child from './Child';

export default class Parent extends Component {
  render() {
    return (
      <div>
        <p>I am Parent component! How would you change the props in a child component?</p>
        <p>How can we change the props in `Child`?</p>
        <Child name ={"mark"} />
      </div>
    )
  }
}
