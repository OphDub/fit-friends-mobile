import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import AddWorkout from '../containers/AddWorkout/AddWorkout';

describe('AddWorkout Component', () => {
  let rendered;

  beforeEach(() => {
    rendered = shallow(<AddWorkout/>);
  });

  it('should match the snapshot', () => {
    rendered = renderer.create(<AddWorkout />).toJSON();

    expect(rendered).toMatchSnapshot();
  });

  it('workoutName and workoutDesc in state should start as empty strings', () =>{
    const expected = '';

    expect(rendered.instance().state.workoutName).toEqual(expected);
    expect(rendered.instance().state.workoutDesc).toEqual(expected);
  });

  it('exercises array in state should should be empty', () => {
    const expected = [];

    expected(rendered.instance().state.exercises).toDeepEqual(expected);
  });

  it('handleInputChange should update state', () => {

  });
});
