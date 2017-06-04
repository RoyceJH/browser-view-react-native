import React, { Component } from 'react';
import {
  WebView
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Browser extends Component {
  componentDidMount() {
    Actions.refresh({title: this.props.title});
  }

  render() {
    return(
      <WebView
        source={{uri: this.props.url}}>
      </WebView>
    );
  }
}

export default Browser;
