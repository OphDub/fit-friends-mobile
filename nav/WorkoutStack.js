import React from 'react';
import { createStackNavigator } from 'react-navigation';

import WorkoutHistory from '../containers/WorkoutHistory/WorkoutHistory';
import { Workout } from '../containers/Workout/Workout';

const RouteConfig = {
  WorkoutHistory: {
    screen: WorkoutHistory,
    navigationOptions: {
      header: null
    },
  },
  Workout: {
    screen: Workout,
    navigationOptions: (props) => ({
      title: props.navigation.state.params.title
    })
  },
};

const StackNavConfig = {
  navigationOptions: {
    headerTintColor: '#3d3d3d'
  }
};

export default createStackNavigator(RouteConfig, StackNavConfig);