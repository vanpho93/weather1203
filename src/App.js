import React, { Component } from 'react';
import { Weather } from './components/Weather';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Weather />
      </Provider>
    )
  }
}
