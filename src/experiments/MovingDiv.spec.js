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
        right: 0,
        bottom: 0,
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
        wrapper.setState({ position: { top: 50 } });
        instance.handleMovement(DIRECTIONS.UP, 100);
        expectedState = { position: { top: 150 } };
      });

      it('changes state by expected amount', () => {
        assert.deepEqual(instance.state, expectedState);
      });
    });
  });
});