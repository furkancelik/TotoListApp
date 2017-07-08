import { observable, action, computed } from 'mobx';
import Config from '../config/config';

export default class List {
  @observable data = null;

  @action
  async fetchData() {
    console.log('app1');
    try {
      console.log('2');
      const response = await fetch(Config.API(''));
      const responseJson = await response.json();
      this.data = responseJson.data;
    } catch (error) {
      console.log('e1');
      console.error(error);
    }
    console.log('3');
  }

  @computed
  get getData(): Array<mixed> {
    return this.data;
  }
}
