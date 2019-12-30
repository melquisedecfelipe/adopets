import React from 'react';

import { shallow } from 'enzyme';

import Login from '../pages/Login';

describe('Login testing with Enzyme', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper).toMatchSnapshot();
  });
});
