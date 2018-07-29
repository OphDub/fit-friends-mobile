import React from 'react';
import { createStackNavigator } from 'react-navigation';

import WorkoutHistory from '../containers/WorkoutHistory/WorkoutHistory';
import { Workout } from '../containers/Workout/Workout';

const RouteConfig = {
  WorkoutHistory: {
    screen: WorkoutHistory
  },
  Workout: {
    screen: Workout,
  },
};

export default createStackNavigator(RouteConfig);