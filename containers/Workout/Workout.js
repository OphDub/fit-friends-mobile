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
      <View style={styles.sections}>
        <Text style={styles.workoutTitles}>Originator:</Text>
        <Text style={styles.workoutInfo}>{params.originator}</Text>
      </View>
      <View style={styles.sections}>
        <Text style={styles.workoutTitles}>Description:</Text>
        <Text style={styles.workoutInfo}>{params.desc}</Text>
      </View>
      <View style={styles.sections}>
        <Text style={styles.workoutTitles}>Exercises: </Text>
        <View>
          {exerciseList}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
    paddingTop: 15,
  },
  sections: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10,
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