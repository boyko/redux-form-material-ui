import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';
import MuiReactSelectAutocomplete from '../ReactSelectAutocomplete/MuiReactSelectAutocomplete';

describe('<MuiReactSelectAutocomplete />', () => {
  it('mounts', () => {
    const wrapper = mount(<MuiReactSelectAutocomplete />);
    expect(wrapper).to.have.length(1);
  });
});
