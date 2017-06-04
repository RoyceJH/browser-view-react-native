import React, { Component } from 'react';
import {
  WebView,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class BrowserView extends Component {
  componentDidMount() {
    Actions.refresh({title: this.props.title});
  }

  render() {
    return(
      <WebView
        source={{uri: this.props.url}}>
        <Text>'hello'
        </Text>
      </WebView>
    );
  }
}

export default BrowserView;
