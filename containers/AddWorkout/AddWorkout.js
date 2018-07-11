import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

export default class AddWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutName: '',
      workoutDesc: '',
      exercises: []
    };
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Add Workout</Text>
        <Text>Workout Name: </Text>
          <TextInput style={styles.inputs}></TextInput>
        <Text>Description (Optional):</Text>
          <TextInput style={styles.inputs}></TextInput>
        <Text>Exercises</Text>
          <TextInput style={styles.inputs}></TextInput>
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
  }
});