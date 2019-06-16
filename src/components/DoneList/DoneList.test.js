import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { DoneList } from './DoneList';

describe('DoneList', () => {
  it('should render DoneList with given props(task1)', () => {
    const props = {
      doneArr: [{ name: 'task1', id: 1 }],
      onDeleteFromDone: jest.fn(),
    };
    const wrapper = shallow(<DoneList {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render listItemName element with task name as children', () => {
    const props = {
      doneArr: [{ name: 'task1', id: 1 }],
      onDeleteFromList: jest.fn(),
    };
    const wrapper = shallow(<DoneList {...props} />);
    const listItemNameClassElement = wrapper.find('.listItemName');
    expect(listItemNameClassElement.props().children).toBe(
      props.doneArr[0].name,
    );
  });

  it('should call onDeleteFromDone fn from props on click with name arg', () => {
    const props = {
      doneArr: [{ name: 'task1', id: 1 }, { name: 'task1', id: 1 }],
      onDeleteFromDone: jest.fn(),
    };

    const wrapper = shallow(<DoneList {...props} />);
    const listItemDeleteClassElement = wrapper.find('.listItemDelete');

    listItemDeleteClassElement.at(0).simulate('click');
    expect(props.onDeleteFromDone).toHaveBeenCalledWith(props.doneArr[0]);

    listItemDeleteClassElement.at(1).simulate('click');
    expect(props.onDeleteFromDone).toHaveBeenCalledWith(props.doneArr[1]);
  });
});
