import React from "react";
import sinon from "sinon";
import { expect } from "chai";
import { mount } from "enzyme";
import PhoneNumberInput from "../PhoneNumberInput";

describe("<PhoneNumberInput/>", () => {
  it("mounts", () => {
    const onChange = sinon.spy();
    const wrapper = mount(<PhoneNumberInput onChange={onChange}/>);
    expect(wrapper.length).to.equal(1);
  });
});
