import React from 'react';
import { DIRECTIONS, KEYBOARD_SPEED, KEYS } from '../constants/directions';

export default class MovingDiv extends React.Component {

  constructor() {
    super();

    this.state = {
      position: {
        top: 0,
        left: 0
      }
    };
  }
  componentDidMount() {
    window.addEventListener('keydown', this.getMovementFromKey);
  }

  getMovementFromKey(e) {
    const { key } = e;

    key === KEYS.UP &&  this.handleMovement(DIRECTIONS.UP, KEYBOARD_SPEED);
    key === KEYS.DOWN &&  this.handleMovement(DIRECTIONS.DOWN, KEYBOARD_SPEED);
    key === KEYS.LEFT &&  this.handleMovement(DIRECTIONS.LEFT, KEYBOARD_SPEED);    
    key === KEYS.RIGHT &&  this.handleMovement(DIRECTIONS.RIGHT, KEYBOARD_SPEED);
    
  }

  handleMovement(direction, amount) {
    const { position } = this.state;

    let newPosition = position;
    switch (direction) {
      case DIRECTIONS.UP:
        newPosition.top = newPosition.top - amount;
        break;
      case DIRECTIONS.DOWN:
        newPosition.top = newPosition.top + amount;
        break;
      case DIRECTIONS.LEFT:
        newPosition.left = newPosition.left - amount;
        break;
      case DIRECTIONS.RIGHT:
        newPosition.left = newPosition.left + amount;
        break;
      default:
        newPosition = position;
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