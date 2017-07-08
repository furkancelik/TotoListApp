import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../config/styles';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.containerCenter}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('listView1')}
            style={styles.btn}
          >
            <Text style={styles.btnTxt}>ListView 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('listView2')}
            style={styles.btn}
          >
            <Text style={styles.btnTxt}>ListView 2 (Paginate)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('flatList1')}
            style={styles.btn}
          >
            <Text style={styles.btnTxt}>Flat List 1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>FlatList 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>FlatList 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>FlatList 4</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
