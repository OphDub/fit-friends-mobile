import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Team from '../containers/Team/Team';

describe('Team Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Team/>);
  });

  it('should match the snapshot', () => {
    wrapper = renderer.create(<Team/>).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});