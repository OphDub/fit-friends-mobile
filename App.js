import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

import Home from './containers/Home/Home';
import Team from './containers/Team/Team';
import WorkoutHistory from './containers/WorkoutHistory/WorkoutHistory';

const RouteConfig = {
  Home: { screen: Home },
  Team: { screen: Team },
  WorkoutHistory: { screen: WorkoutHistory },
};

const BottomTabNavConfig = {
  initialRouteName: 'Home',
  activeTintColor: '#f0edf6',
  inactiveTintColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
};

const BottomTabNav = createMaterialBottomTabNavigator(RouteConfig, BottomTabNavConfig);

export default class App extends React.Component {
  render() {
    return (
      <Provider  store={store}>
        <BottomTabNav/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
