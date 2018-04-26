import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import Test from "../Test";

describe("<Test/>", () => {
  it("mounts", () => {
    const wrapper = mount(<Test/>);
    expect(wrapper).to.have.length(1);
  });
});
