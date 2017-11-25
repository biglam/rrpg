import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { assert } from 'chai';

describe('app', () => {
  let wrapper, props;
  beforeEach(() => {
    props = {};
    wrapper = shallow(<App {...props} />);
  });

  it('renders a wrapper div', () => {
    assert.isDefined(wrapper.find('div').node);
  });
});