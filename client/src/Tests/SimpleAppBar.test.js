import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import SimpleAppBar from '../Components/SimpleAppBar';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Data component", () => {
  test("renders", () => {
    const wrapper = shallow(<SimpleAppBar />);
    expect(wrapper.exists()).toBe(true);
  });
})
