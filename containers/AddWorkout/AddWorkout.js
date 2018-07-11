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
          <TextInput></TextInput>
        <Text>Description (Optional):</Text>
          <TextInput></TextInput>
        <Text>Exercises</Text>
          <TextInput></TextInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});