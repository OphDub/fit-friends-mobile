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
    const mockExercise1 = { name: 'push ups', reps: '10', id: 1531616558129 };
    const mockExercise2 = { name: 'jumping jacks', reps: '10', id: 1531616558130 };
    const mockExercises = [ mockExercise1, mockExercise2 ];
    const expected = [ mockExercise1 ];
    const mockExerciseId = 1531616558130;

    wrapper.instance().setState({ exercises: mockExercises });
    wrapper.instance().removeExercise(mockExerciseId);

    expect(wrapper.instance().state.exercises).toEqual(expected);
  });

  it('submitWorkout should clear state', () => {
    const mockExercise1 = { name: 'push ups', reps: '10', id: 1531616558129 };
    const mockExercise2 = { name: 'jumping jacks', reps: '10', id: 1531616558130 };
    const mockExercises = [ mockExercise1, mockExercise2 ];
    const mockWorkoutName = 'my workout';
    const mockWorkoutDesc = 'mock description';
    const expectedString = '';
    const expectedArray = [];

    wrapper.setState({
      workoutName: mockWorkoutName,
      workoutDesc: mockWorkoutDesc,
      exercises: mockExercises
    });
    wrapper.instance().submitWorkout();

    expect(wrapper.instance().state.workoutName).toEqual(expectedString);
    expect(wrapper.instance().state.workoutDesc).toEqual(expectedString);
    expect(wrapper.instance().state.exerciseName).toEqual(expectedString);
    expect(wrapper.instance().state.reps).toEqual(expectedString);
    expect(wrapper.instance().state.exercises).toEqual(expectedArray);
    expect(wrapper.instance().state.error).toEqual(expectedString);
  });

  it('validateWorkout should update error in state', () => {

  });
});
