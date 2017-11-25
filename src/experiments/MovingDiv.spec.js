import React from 'react';
import MovingDiv from './MovingDiv';
import { shallow } from 'enzyme';
import { assert } from 'chai';

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
});