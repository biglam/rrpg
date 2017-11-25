import React from 'react';
import { DIRECTIONS } from '../constants/directions';

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

  handleMovement(direction, amount) {
    const { position } = this.state;

    let newPosition = position;

    switch (direction) {
      case DIRECTIONS.UP:
        newPosition.top = newPosition.top + amount;
        break;
    }

    this.setState({ position: newPosition });
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>);
  }
}