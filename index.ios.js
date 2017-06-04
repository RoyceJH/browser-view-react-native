/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import ListURLs from './components/listurls';
import ShowPage from './components/show_page';

export default class RNBrowser extends Component {
  render() {
    return( <Router>
      <Scene key='root'>
        <Scene key='list' title='URLs' component={ListURLs} initial={true} />
        <Scene key='show' component={ShowPage} />
      </Scene>
    </Router>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNBrowser', () => RNBrowser);
