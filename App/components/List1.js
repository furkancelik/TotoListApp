import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import { observer, inject } from 'mobx-react/native';

export default class MyListItem extends React.PureComponent {
  render() {
    console.log(this.props);
    return (
      <TouchableOpacity
        style={{ borderBottomWidth: 1, borderColor: '#ccc', padding: 10 }}
        onPress={this.props.edit}
      >
        <Text>
          item:{this.props.item} - index:{this.props.index}
        </Text>
      </TouchableOpacity>
    );
  }
}
