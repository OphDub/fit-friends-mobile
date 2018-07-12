import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import AddWorkout from '../containers/AddWorkout/AddWorkout';

describe('AddWorkout Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddWorkout/>);
  });

  it('should match the snapshot', () => {
    wrapper = renderer.create(<AddWorkout />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('workoutName and workoutDesc in state should start as empty strings', () =>{
    const expected = '';

    expect(wrapper.instance().state.workoutName).toEqual(expected);
    expect(wrapper.instance().state.workoutDesc).toEqual(expected);
  });

  it('exercises array in state should should be empty', () => {
    const expected = [];

    expect(wrapper.instance().state.exercises).toEqual(expected);
  });

  it('addExercise should update exercises in state', () => {

  });

  it('exerciseValidation should update error in state', () => {

  });

  it('removeExercise should update exercises in state', () => {

  });

  it('submitWorkout should clear state', () => {

  });

  it('validateWorkout should update error in state', () => {

  });
});
