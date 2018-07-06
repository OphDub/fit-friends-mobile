import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider  store={store}>
        <View style={styles.container}>
          <Text>FitFriends</Text>
        </View>
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
