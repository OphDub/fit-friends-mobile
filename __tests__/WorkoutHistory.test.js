import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import WorkoutHistory from '../containers/WorkoutHistory/WorkoutHistory';

describe('WorkoutHistory Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WorkoutHistory/>);
  });

  it('should match the snapshot', () => {
    wrapper = renderer.create(<WorkoutHistory/>).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});