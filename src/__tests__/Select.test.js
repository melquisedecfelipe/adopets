import React from 'react';

import { shallow } from 'enzyme';

import Select from '../components/Select';

describe('Select testing with Enzyme', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Select />);

    expect(wrapper).toMatchSnapshot();
  });
});
