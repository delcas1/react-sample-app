import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(toJSON(wrapper)).toMatchSnapshot();  
});

//expect(wrapper.find('h1').text()).toBe('Main');
//expect(wrapper).toMatchSnapshot();
test('should find the correct title in the h1', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('h1').text()).toBe('Test-React-App');  
});

