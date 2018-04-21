import React from "react";
import { expect } from "chai";
import sinon from "sinon";
import { mount } from "enzyme";
import ReactSelectAutocomplete from "../ReactSelectAutocomplete";

describe("<ReactSelectAutocomplete/>", () => {
  it("mounts", () => {
    const wrapper = mount(<ReactSelectAutocomplete/>);
    expect(wrapper).to.have.length(1);
  });
});
