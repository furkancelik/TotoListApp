import React, { Component } from 'react';
import { observer, inject } from 'mobx-react/native';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from '../../config/styles';

@inject('list')
@observer
export default class Example1 extends Component {
  static navigationOptions = {
    title: 'Flat List 1',
  };
  componentWillMount() {
    this.props.list.fetchData();
  }

  props: {
    list: Object,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.homeText}>Flat List</Text>
        <TouchableOpacity onPress={() => this.props.list.addUnshift()}>
          <Text>Başına Ekle</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.list.addPush()}>
          <Text>Sonuna Ekle</Text>
        </TouchableOpacity>
        <FlatList
          keyExtractor={(item, index) => index}
          data={this.props.list.getFlatListData}
          renderItem={({ item, index }) =>
            (<TouchableOpacity
              style={{ borderBottomWidth: 1, borderColor: '#ccc', padding: 10 }}
              onPress={() => this.props.list.editDataIndex(index)}
            >
              <Text>
                item:{item} - index:{index}
              </Text>
            </TouchableOpacity>)}
        />
      </View>
    );
  }
}
