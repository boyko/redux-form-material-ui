import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';
import ReactSelectAutocompleteInput from '../ReactSelectAutocomplete';

describe('<ReactSelectAutocompleteInput />', () => {
  it('mounts', () => {
    const wrapper = mount(<ReactSelectAutocompleteInput options={[{ value: 'value1', label: 'Value 1 Label' }]} />);
    expect(wrapper).to.have.length(1);
  });
});
