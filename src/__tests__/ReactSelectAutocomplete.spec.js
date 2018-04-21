import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';
import ReactSelectAutocompleteStyled from '../ReactSelectAutocomplete/MuiReactSelectAutocompleteStyled';

describe('<ReactSelectAutocomplete/>', () => {
  it('mounts', () => {
    const wrapper = mount(<ReactSelectAutocompleteStyled />);
    expect(wrapper).to.have.length(1);
  });
});
