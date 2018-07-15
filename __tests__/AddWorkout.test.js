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

  it('should start with an empty initial state', () =>{
    const expectedString = '';
    const expectedArray = [];

    expect(wrapper.instance().state.workoutName).toEqual(expectedString);
    expect(wrapper.instance().state.workoutDesc).toEqual(expectedString);
    expect(wrapper.instance().state.exerciseName).toEqual(expectedString);
    expect(wrapper.instance().state.reps).toEqual(expectedString);
    expect(wrapper.instance().state.exercises).toEqual(expectedArray);
    expect(wrapper.instance().state.error).toEqual(expectedString);
  });

  it('addExercise should update exercises, exerciseName, and reps in state', () => {
    const mockDateNow = () => {return 1531616558129}
    const originalDateNow = Date.now;
    Date.now = mockDateNow;

    const mockExercise = { name: 'push ups', reps: '10', id: 1531616558129 };
    const expectedExercises = [ mockExercise ];
    const expectedString = '';

    wrapper.instance().setState({
      exerciseName: mockExercise.name,
      reps: mockExercise.reps,
    });
    wrapper.instance().addExercise();

    expect(wrapper.instance().state.exercises).toEqual(expectedExercises);
    expect(wrapper.instance().state.exerciseName).toEqual(expectedString);
    expect(wrapper.instance().state.reps).toEqual(expectedString);
  });

  it('exerciseValidation should update error in state', () => {
    const mockExercise = { name: 'push ups', reps: '' };
    const expectedExercises = [];
    const expectedError = 'Please give your exercise a rep count and name.';

    wrapper.instance().setState({
      exerciseName: mockExercise.name,
      reps: mockExercise.reps,
    });
    wrapper.instance().addExercise();

    expect(wrapper.instance().state.error).toEqual(expectedError);
    expect(wrapper.instance().state.exercises).toEqual(expectedExercises);
  });

  it('removeExercise should update exercises in state', () => {
    const mockExercise = { name: 'push ups', reps: '' };
    const expectedExercises = [];
  });

  it('submitWorkout should clear state', () => {

  });

  it('validateWorkout should update error in state', () => {

  });
});
