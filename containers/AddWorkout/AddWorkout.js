import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

export default class AddWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutName: '',
      workoutDesc: '',
      exerciseName: '',
      reps: '',
      exercises: []
    };
  }

  addExercise = () => {
    const { exerciseName, reps, exercises } = this.state;
    const newExercise = {
      name: exerciseName,
      reps
    };

    this.setState({
      exercises: [ ...exercises, newExercise ],
      exerciseName: '',
      reps: ''
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Add Workout</Text>
        <Text>Workout Name: </Text>
          <TextInput
            style={styles.inputs}
            value={this.state.workoutName}
            keyboardAppearance={'dark'}
            onChangeText={(workoutName) => this.setState({ workoutName })}
          />
        <Text>Description (Optional):</Text>
          <TextInput
            style={styles.inputs}
            value={this.state.workoutDesc}
            keyboardAppearance={'dark'}
            onChangeText={(workoutDesc) => this.setState({ workoutDesc })}
          />
        <Text>Exercises:</Text>
          <Text>Exercise Name:</Text>
          <TextInput
            style={styles.inputs}
            value={this.state.exerciseName}
            keyboardAppearance={'dark'}
            onChangeText={(exerciseName) => this.setState({ exerciseName })}
          />
          <Text>Reps:</Text>
          <TextInput
            style={styles.inputs}
            value={this.state.reps}
            keyboardAppearance={'dark'}
            keyboardType={'number-pad'}
            onChangeText={(reps) => this.setState({ reps })}
          />
          <TouchableHighlight
            style={styles.buttons}
            onPress={this.addExercise}
          >
            <Text>Add Exercise</Text>
          </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    marginVertical: 20,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  inputs: {
    backgroundColor: '#ffff',
    borderRadius: 5,
    width: 120,
  },
  buttons: {
    backgroundColor: '#ffff',
    padding: 10,
  }
});