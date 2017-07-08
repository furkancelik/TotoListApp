import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import { observer, inject } from 'mobx-react/native';

export default class MyListItem extends React.PureComponent {
  render() {
    console.log(this.props);
    return (
      <View
        style={{
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            console.log('a');
          }}
        >
          <Text
            style={{
              color: '#000',
              height: 40,
              justifyContent: 'center',
            }}
          >
            {this.props.item}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
