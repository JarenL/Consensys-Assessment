import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import DataList from '../Components/DataList';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
describe("DataList component", () => {
  test("renders", () => {
		let test = [{
			"id": 1,
			"first_name": "Bobinette",
			"last_name": "Davidovici",
			"email": "bdavidovici0@columbia.edu",
			"gender": "Female",
			"ip_address": "87.73.185.50"
		},
		{
			"id": 2,
			"first_name": "Glen",
			"last_name": "Meech",
			"email": "gmeech1@blogspot.com",
			"gender": "Female",
			"ip_address": "242.11.141.5"
		},
		{
			"id": 3,
			"first_name": "Broderic",
			"last_name": "Mawford",
			"email": "bmawford2@dedecms.com",
			"gender": "Male",
			"ip_address": "153.201.229.67"
		}]
		const wrapper = shallow(<DataList data={test}/>);
		expect(wrapper.exists()).toBe(true);
  });
})
