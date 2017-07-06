/* @flow */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../../config/styles';

export default class UserList2 extends Component {
  static navigationOptions = {
    title: 'User List 1',
  };

  props: {
    navigation: Object,
    navigation: { state: Object },
    navigation: { state: { params: Object } },
  };

  render() {
    const { params }: { params: Object, params: { user: string } } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <Text style={styles.homeText}>List View</Text>
        <Text style={styles.version}>Hello!</Text>
        <Text style={styles.version}>
          {params.user}!
        </Text>
      </View>
    );
  }
}
