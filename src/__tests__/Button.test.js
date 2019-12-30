import React from 'react';

import { shallow } from 'enzyme';

import Button from '../components/Button';

describe('Button testing with Enzyme', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper).toMatchSnapshot();
  });
});
