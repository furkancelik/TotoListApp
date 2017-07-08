import { observable, action, computed } from 'mobx';
import { ListView } from 'react-native';
import axios from 'axios';
import Config from '../config/config';

export default class List2Store {
  @observable data = [];
  @observable paginate: number = 1;

  ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

  @action
  async fetchData() {
    if (this.data.length < 1) {
      try {
        const response = await axios.get(Config.API(`list/${this.paginate}`));
        this.data = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  }

  @action
  async fetchPaginate() {
    this.paginate = this.paginate + 1;
    try {
      const response = await axios.get(Config.API(`list/${this.paginate}`));
      this.data.push(...response.data);
    } catch (error) {
      console.error(error);
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
  get dataSource() {
    return this.ds.cloneWithRows(this.data.slice());
  }
}
