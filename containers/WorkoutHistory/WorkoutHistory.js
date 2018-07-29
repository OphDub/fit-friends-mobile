import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { ListItem } from 'react-native-elements';

const mockWorkouts = [
  {
    title: 'my workout',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde expedita veritatis architecto adipisci nemo voluptate facilis consectetur aperiam ut ipsam vitae dolor accusamus totam eveniet modi ratione nostrum, natus ab!',
    originator: 'Ophus',
    exercises: {
      a: { name: 'push ups', reps: '10', id: 1531616558129 },
      b: { name: 'jumping jacks', reps: '10', id: 1531616558130 },
      c: { name: 'air squats', reps: '10', id: 1531616558131 }
    }
  },
  {
    title: 'other workout',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde expedita veritatis architecto adipisci nemo voluptate facilis consectetur aperiam ut ipsam vitae dolor accusamus totam eveniet modi ratione nostrum, natus ab!',
    originator: 'Felipe',
    exercises: {
      a: { name: 'squats', reps: '10', id: 1531616558129 },
      b: { name: 'push ups', reps: '10', id: 1531616558130 },
      c: { name: 'pull ups', reps: '10', id: 1531616558131 }
    }
  }
];

export default class WorkoutHistory extends Component {
  constructor(props) {
    super(props);
    this.state={
      workouts: []
    };
  }

  componentWillMount = () => {
    this.setState({
      workouts: mockWorkouts
    })
  }

  render() {
    return(
      <View style={styles.container}>
        {
          this.state.workouts.map((workout, i) => (
            <ListItem
              key={i}
              title={workout.title}
              subtitle={workout.originator}
              onPress={() => this.props.navigation.navigate('Workout', workout)}
            />
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC0CB',
  },
});