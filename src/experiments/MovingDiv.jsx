import React from 'react';

export default class MovingDiv extends React.Component {

  constructor() {
    super();

    this.state = {
      position: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    };
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>);
  }
}