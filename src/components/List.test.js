import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import List from './List';

configure({ adapter: new Adapter() });

describe('<List />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<List />);
  });

  it('should have length of one', () => {
    expect(wrapper.find(List)).toHaveLength(1);
  });

  it('should have span item with class listItemName', () => {
    expect(
      wrapper.contains(<span className='listItemName'>{item}</span>),
    ).toEqual(true);
  });
});
