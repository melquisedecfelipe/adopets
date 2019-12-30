import React from 'react';

import { shallow } from 'enzyme';

import Search from '../pages/Search';

describe('Search testing with Enzyme', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Search />);

    expect(wrapper).toMatchSnapshot();
  });
});
