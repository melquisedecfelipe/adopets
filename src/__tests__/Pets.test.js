import React from 'react';

import { shallow } from 'enzyme';

import Pets from '../components/Pets';

describe('Pets testing with Enzyme', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Pets />);

    expect(wrapper).toMatchSnapshot();
  });
});
