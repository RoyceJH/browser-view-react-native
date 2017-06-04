import React, { Component } from 'react';
import {
  WebView
} from 'react-native';

class Browser extends Component {
  render() {
    return(
      <WebView
        uri={{uri: this.props.source}}>
      </WebView>
    );
  }
}

export default Browser;
