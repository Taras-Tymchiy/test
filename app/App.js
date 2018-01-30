/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { Provider } from 'react-redux';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import configureStore from './store/configureStore';
import NavigationContainer from './components/NavigationContainer';

const store = configureStore();

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer />
      </Provider>
    );
  }
}