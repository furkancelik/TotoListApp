import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../../config/styles';

export default class UserList2 extends Component {
  static navigationOptions = {
    title: 'User List 2',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.homeText}>Flat List</Text>
        <Text style={styles.version}>Hello!</Text>
      </View>
    );
  }
}
