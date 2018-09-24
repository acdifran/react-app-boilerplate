import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from '../../src/components/LoginPage';
import * as auth from '../../src/actions/auth';

test('should render login page correctly', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
  const mockLogin = jest.spyOn(auth, 'startLogin');
  const wrapper = shallow(<LoginPage />);
  wrapper.find('button').simulate('click');
  expect(mockLogin).toHaveBeenCalled();
});
