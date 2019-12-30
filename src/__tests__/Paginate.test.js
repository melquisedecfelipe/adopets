import React from 'react';

import { shallow } from 'enzyme';

import Input from '../components/Input';

describe('Input testing with Enzyme', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Input />);

    expect(wrapper).toMatchSnapshot();
  });
});
