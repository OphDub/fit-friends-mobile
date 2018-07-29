import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export const Workout = ({navigation}) => {
  const { params } = navigation.state;
  const exerciseKeys = Object.keys(params.exercises);
  const exerciseList = Object.values(params.exercises).map((exercise, i) => (

      <Text key={exerciseKeys[i]}>{exercise.name} <Text>Reps: {exercise.reps}</Text></Text>
  ))

  return(
    <View style={styles.container}>
      <Text style={styles.workoutTitles}>{params.title}</Text>
      <Text style={styles.workoutTitles}>{params.originator}</Text>
      <Text style={styles.workoutTitles}>Description:</Text>
      <Text style={styles.workoutInfo}>{params.desc}</Text>
      <Text style={styles.workoutTitles}>Exercises: </Text>
      <View>
        {exerciseList}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  workoutTitles: {
    fontWeight: "bold",
    textAlign: "center"
  },
  workoutInfo: {
    fontWeight: "normal",
    textAlign: "left",
  }
});