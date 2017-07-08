import React, { Component } from 'react';
import { observer, inject } from 'mobx-react/native';
import { View, Text, TouchableOpacity, TextInput, ListView } from 'react-native';
import styles from '../../config/styles';

@inject('list')
@observer
export default class Home extends Component {
  static navigationOptions = {
    title: 'List View 1',
  };

  componentWillMount() {
    this.props.list.fetchData();
  }

  props: {
    list: Object,
  };

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableOpacity
        style={{ borderBottomWidth: 1, borderColor: '#ccc', padding: 10 }}
        onPress={() => this.props.list.editDataIndex(rowID)}
      >
        <Text>
          {rowData}
        </Text>
      </TouchableOpacity>
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
        <View
          style={{
            flex: 0,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.list.addUnshift()}
            style={{ flex: 0, alignItems: 'flex-end', margin: 5 }}
          >
            <Text>Başa Ekle</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.list.editData()}
            style={{ flex: 0, alignItems: 'flex-end', margin: 5 }}
          >
            <Text>Düzenle</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.list.addPush()}
            style={{ flex: 0, alignItems: 'flex-end', margin: 5 }}
          >
            <Text>Sona Ekle</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, borderWidth: 1 }}>
          <ListView
            dataSource={this.props.list.dataSource}
            renderRow={this.renderRow.bind(this)}
            enableEmptySections
          />
        </View>
      </View>
    );
  }
}
