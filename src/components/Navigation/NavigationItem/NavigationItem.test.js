import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { NavigationItem } from './NavigationItem';

describe('NavigationItem', () => {
  it('renders NavigationItem without crashing given the required props', () => {
    const props = {
      isLogged: false,
      onLogoutUser: jest.fn(),
      linkTo: '/login',
    };
    const wrapper = shallow(<NavigationItem {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call openingModal fn when clicked', () => {
    const props = {
      isLogged: false,
      onLogoutUser: jest.fn(),
      linkTo: '/login',
      children: 'Login',
    };

    const loggingOut = () => {
      props.onLogoutUser();
    };

    const wrapper = shallow(<NavigationItem {...props} />);
    const navItemClassElement = wrapper.find('.nav-item');

    navItemClassElement.simulate('click', loggingOut());
    expect(props.onLogoutUser).toBeCalled();
  });
});
