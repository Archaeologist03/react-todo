import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { SubmitForm } from './SubmitForm';

describe('SubmitForm', () => {
  it('should render SubmitForm without crashing given the required props', () => {
    const props = {
      text: '',
      updateInitialState: jest.fn(),
      onInputChange: jest.fn(),
      onAddToList: jest.fn(),
    };
    const wrapper = shallow(<SubmitForm {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call onAddToList fn on click with text arg', () => {
    const props = {
      text: '',
      updateInitialState: jest.fn(),
      onInputChange: jest.fn(),
      onAddToList: jest.fn(),
    };

    const wrapper = shallow(<SubmitForm {...props} />);
    const submitBtnClassElement = wrapper.find('.submitBtn');

    submitBtnClassElement.simulate('click', {
      preventDefault: () => {
        props.onAddToList(props.text);
      },
    });
    expect(props.onAddToList).toBeCalledWith(props.text);
  });

  it('should call onAddToList fn on Enter keypress with text arg', () => {
    const props = {
      text: '',
      updateInitialState: jest.fn(),
      onInputChange: jest.fn(),
      onAddToList: jest.fn(),
    };

    const wrapper = shallow(<SubmitForm {...props} />);
    const addItemInputClassElement = wrapper.find('.addItemInput');

    addItemInputClassElement.simulate('keypress', { key: 'Enter' });
    expect(props.onAddToList).toBeCalledWith(props.text);
  });

  it('should call onInputChange fn on onChange event with text arg', () => {
    const props = {
      text: 'task1',
      updateInitialState: jest.fn(),
      onInputChange: jest.fn(),
      onAddToList: jest.fn(),
    };

    const wrapper = shallow(<SubmitForm {...props} />);
    const addItemInputClassElement = wrapper.find('.addItemInput');

    addItemInputClassElement.simulate('change', props.text);
    expect(props.onInputChange).toBeCalledWith(props.text);
  });
});
