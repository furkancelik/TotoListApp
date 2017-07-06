import React, { Component } from 'react';
import { observer, Provider } from 'mobx-react/native';
import Router from './config/router';
import stores from './stores';

@observer
export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Router />
      </Provider>
    );
  }
}
