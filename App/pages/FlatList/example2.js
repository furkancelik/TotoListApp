import React, { Component } from 'react';
import { observer, inject } from 'mobx-react/native';
import { View, Text, FlatList } from 'react-native';
import styles from '../../config/styles';

import List1 from '../../components/List1';

@inject('list')
@observer
export default class Example2 extends Component {
  static navigationOptions = {
    title: 'User List 2',
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
        <FlatList
          keyExtractor={(item, index) => index}
          data={this.props.list.getFlatListData}
          renderItem={({ item, index }) =>
            <List1 edit={() => this.props.list.editDataIndex(index)} index={index} item={item} />}
        />
      </View>
    );
  }
}
