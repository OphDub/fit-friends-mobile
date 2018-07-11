import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Settings from '../containers/Settings/Settings';

describe('Settings Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Settings/>);
  });

  it('should match the snapshot', () => {
    wrapper = renderer.create(<Settings/>).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});