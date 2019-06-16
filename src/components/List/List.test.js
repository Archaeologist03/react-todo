// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { List } from './List';

describe('List', () => {
  it('renders List without crashing given the required props', () => {
    const props = {
      listArr: [],
      onDeleteFromList: jest.fn(),
      onAddToDone: jest.fn(),
    };
    const wrapper = shallow(<List {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render listItemName element with task name as children', () => {
    const props = {
      listArr: [{ name: 'task1', id: 1 }],
      onDeleteFromList: jest.fn(),
      onAddToDone: jest.fn(),
    };
    const wrapper = shallow(<List {...props} />);
    const listItemNameClassElement = wrapper.find('.listItemName');
    expect(listItemNameClassElement.props().children).toBe(
      props.listArr[0].name,
    );
  });

  it('should call onDeleteFromList fn from props on click', () => {
    const props = {
      listArr: [{ name: 'task1', id: 1 }],
      onDeleteFromList: jest.fn(),
      onAddToDone: jest.fn(),
    };
    const wrapper = shallow(<List {...props} />);
    const listItemDeleteClassElement = wrapper.find('.listItemDelete');

    listItemDeleteClassElement.simulate('click');
    expect(props.onDeleteFromList).toBeCalled();
  });

  it('should call onAddToDone fn from props on click with name arg', () => {
    const props = {
      listArr: [{ name: 'task1', id: 1 }],
      onDeleteFromList: jest.fn(),
      onAddToDone: jest.fn(),
    };
    const wrapper = shallow(<List {...props} />);
    const listItemDoneClassElement = wrapper.find('.listItemDone');

    listItemDoneClassElement.simulate('click');
    expect(props.onAddToDone).toHaveBeenCalledWith(props.listArr[0].name);
  });
});
