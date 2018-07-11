import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Home from '../containers/Home/Home';

describe('Home Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home/>);
  });

  it('should match the snapshot', () => {
    wrapper = renderer.create(<Home/>).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});