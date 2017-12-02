import React from 'react';
import MovingDiv from './experiments/MovingDiv.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <MovingDiv />
      </div>);
  }
}