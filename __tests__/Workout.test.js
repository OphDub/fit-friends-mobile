import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Workout from '../containers/Workout/Workout';

describe('Workout Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Workout/>);
  });

  it('should match the snapshot', () => {
    wrapper = renderer.create(<Workout/>).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});