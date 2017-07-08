import { observable, action, computed } from 'mobx';
import { ListView } from 'react-native';
import axios from 'axios';
import Config from '../config/config';

export default class List {
  @observable data = [];

  ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  constructor() {
    this.fetchData();
  }
  @action
  async fetchData() {
    if (this.data.length < 1) {
      try {
        const response = await axios.get(Config.API(''));
        this.data = response.data;
        // const response = await fetch(Config.API(''));
        // const responseJson = await response.json();
        // this.data = responseJson;
      } catch (error) {
        console.error(error);
      }
    }
  }

  @action
  editData() {
    const index = Math.floor(Math.random() * 1000 + 1) - 1;
    this.data[index] = `--- edit list ${index + 1} ---`;
  }

  @action
  editDataIndex(index) {
    this.data[index] = `--- edit list ${index + 1} ---`;
  }

  @action
  addUnshift() {
    this.data.unshift('yeni eklenen');
  }

  @action
  addPush() {
    this.data.push('yeni eklenen');
  }

  @computed
  get getFlatListData() {
    return this.data.slice();
  }

  @computed
  get dataSource() {
    return this.ds.cloneWithRows(this.data.slice());
  }
}
