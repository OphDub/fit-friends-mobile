import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

import Home from './containers/Home/Home';
import AddWorkout from './containers/AddWorkout/AddWorkout';
import Team from './containers/Team/Team';
import WorkoutStack from './nav/WorkoutStack';

const RouteConfig = {
  "Home": { screen: Home },
  "Add Workout": { screen: AddWorkout },
  "Team": { screen: Team },
  "History": { screen: WorkoutStack },
};

const BottomTabNavConfig = {
  initialRouteName: 'Home',
  activeTintColor: '#48E0EA',
  inactiveTintColor: '#f0edf6',
  barStyle: { backgroundColor: '#3d3d3d' },
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;

      if (routeName === 'Home') {
        iconName = `home`;
      } else if (routeName === 'Add Workout') {
        iconName = `add-circle`;
      } else if (routeName === 'Team') {
        iconName = `people`;
      } else if (routeName === 'History') {
        iconName = `history`;
      }

      return <MaterialIcons name={iconName} size={25} color={tintColor} />;
    },
  })
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
