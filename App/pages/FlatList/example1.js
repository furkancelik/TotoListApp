import React, { Component } from 'react';
import { observer, inject } from 'mobx-react/native';
import { View, Text, FlatList } from 'react-native';
import styles from '../../config/styles';

import List1 from '../../components/List1';

@inject('list')
@observer
export default class Example1 extends Component {
  static navigationOptions = {
    title: 'User List 2',
  };
  componentWillMount() {
    this.props.list.fetchData();
  }

  props: {
    list: Object,
  };

  // renderRow(item) {
  //   return (
  // <TouchableOpacity
  //   style={{ borderBottomWidth: 1, borderColor: '#ccc', padding: 10 }}
  //   onPress={() => this.props.list.editDataIndex(1)}
  // >
  //   <Text>
  //     {item}
  //   </Text>
  // </TouchableOpacity>
  //   );
  // }

  renderItem({ item, index }) {
    return (
      <List1
        store={this.props.list}
        edit={() => this.props.list.editDataIndex(index)}
        index={index}
        item={item}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.homeText}>Flat List</Text>
        <FlatList data={this.props.list.getFlatListData} renderItem={this.renderItem} />
      </View>
    );
  }
}
