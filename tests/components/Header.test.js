import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../src/components/Header';
import * as auth from '../../src/actions/auth';

test('should render header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
  const mockLogout = jest.spyOn(auth, 'startLogout');
  const wrapper = shallow(<Header />);
  wrapper.find('button').simulate('click');
  expect(mockLogout).toHaveBeenCalled();
});
