import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Data from '../Components/Data';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Data component", () => {
	let wrapper = shallow(<Data />);
	
  test("renders", () => {
    expect(wrapper.exists()).toBe(true);
	});
	test("renders with props", () => {
    let wrapper = shallow(<Data 
			id={"test"}
			firstName= {"123"}
			lastName={"123"}
			email={"@email"}
			gender={"Male"}
			ipAddress={"123456"}
		/>);
    expect(wrapper.exists()).toBe(true);
  });
})
