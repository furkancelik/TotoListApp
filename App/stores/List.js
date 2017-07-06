import { observable, action, computed } from 'mobx';
import Config from '../config/config';

export default class List {
  @observable data = [];

  @action
  async fetchData() {
    try {
      const response = await fetch(Config.API(''));
      const responseJson = await response.json();
      this.data = responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  @computed
  get getData(): Array<mixed> {
    return this.data;
  }
}
