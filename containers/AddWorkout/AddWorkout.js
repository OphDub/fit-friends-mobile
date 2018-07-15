import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  FlatList,
} from 'react-native';

export default class AddWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutName: '',
      workoutDesc: '',
      exerciseName: '',
      reps: '',
      exercises: [],
      error: ''
    };
  }

  addExercise = () => {
    const { reps, exerciseName } = this.state;

    if(!this.exerciseValidation()) {
      return;
    }

    const id = Date.now();
    const newExercise = Object.assign({ id, reps, name: exerciseName });
    const exercises = [...this.state.exercises, newExercise];

    this.setState({
      exercises,
      reps: '',
      exerciseName: ''
    });
  }

  exerciseValidation = () => {
    const { reps, exerciseName } = this.state;

    if (reps === '' || exerciseName === '') {
      const error = 'Please give your exercise a rep count and name.';

      this.setState({ error });
      return false;
    }

    return true;
  }

  removeExercise = (id) => {
    const { exercises } = this.state;
    const filteredExercises = exercises.filter(exercise => exercise.id !== id);

    this.setState({
      exercises: filteredExercises
    });
  }

  renderExercises = () => {
    return (
      <FlatList
        data={this.state.exercises}
        renderItem={ ({exercise}) =>
          <TouchableHighlight>
            <Text>{exercise.name}</Text>
            <Text>{exercise.reps}</Text>
          </TouchableHighlight>
        }
      />
    )
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
          <TouchableHighlight
            style={styles.buttons}
            onPress={this.addWorkout}
          >
            <Text>Add Workout</Text>
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