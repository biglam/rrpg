import React from 'react';
import MovingDiv from './MovingDiv';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import { DIRECTIONS } from '../constants/directions';

describe('MovingDiv', () => {
  let wrapper, props, initialState, instance;
  beforeEach(() => {
    props = {};
    initialState = {
      position: {
        top: 0,
        left: 0
      }
    };
    wrapper = shallow(<MovingDiv {...props} />);
    instance = wrapper.instance();
  });

  it('initialises with expected state', () => {
    assert.deepEqual(instance.state, initialState);
  });

  describe('#handleMovement', () => {
    let expectedState;
    describe('when moving up', () => {
      beforeEach(() => {
        wrapper.setState({ position: { top: 100 } });
        instance.handleMovement(DIRECTIONS.UP, 75);
        expectedState = { position: { top: 25 } };
      });

      it('changes state by expected amount', () => {
        assert.deepEqual(instance.state, expectedState);
      });
    });

    describe('when moving down', () => {
      beforeEach(() => {
        wrapper.setState({ position: { top: 50 } });
        instance.handleMovement(DIRECTIONS.DOWN, 100);
        expectedState = { position: { top: 150 } };
      });

      it('changes state by expected amount', () => {
        assert.deepEqual(instance.state, expectedState);
      });
    });

    describe('when moving left', () => {
      beforeEach(() => {
        wrapper.setState({ position: { left: 50 } });
        instance.handleMovement(DIRECTIONS.LEFT, 20);
        expectedState = { position: { left: 30 } };
      });

      it('changes state by expected amount', () => {
        assert.deepEqual(instance.state, expectedState);
      });
    });

    describe('when moving right', () => {
      beforeEach(() => {
        wrapper.setState({ position: { left: 50 } });
        instance.handleMovement(DIRECTIONS.RIGHT, 100);
        expectedState = { position: { left: 150 } };
      });

      it('changes state by expected amount', () => {
        assert.deepEqual(instance.state, expectedState);
      });
    });
  });
});