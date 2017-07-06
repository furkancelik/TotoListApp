import React, { Component } from 'react';
import { observer, inject } from 'mobx-react/native';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from '../../config/styles';

@inject('list')
@observer
export default class Home extends Component {
  static navigationOptions = {
    title: 'TODOList',
  };

  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  componentWillMount() {
    this.props.list.fetchData();
  }

  props: {
    list: Object,
  };

  renderList() {
    if (this.props.list.data == null) {
      return <Text>Yükleniyor</Text>;
    }
    return this.props.list.getData.map(list =>
      (<View>
        <Text>
          {list}
        </Text>
      </View>),
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <TextInput style={styles.textInput} />
          <TouchableOpacity style={styles.saveBtn}>
            <Text style={styles.saveBtnTxt}>
              {'+'}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          {this.renderList()}
        </View>
      </View>
    );
  }
}
