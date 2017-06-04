import React, { Component } from 'react';
import {
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const urls = [
  {
    key:'Google',
    url:'https://www.google.com'
  },
  {
    key:'Facebook',
    url:'https://www.facebook.com'
  },
  {
    key:'Github',
    url:'https://www.github.com'
  },
  {
    key:'LinkedIn',
    url:'https://www.linkedin.com'
  },
  {
    key:'React',
    url:'https://www.react.org'
  },
  {
    key:'Royce',
    url:'http://www.roycekim.com'
  },
  {
    key:'BetterGoat',
    url:'http://www.bettergoat.us'
  },
  {
    key:'HeroBreak',
    url:'http://www.roycekim.com/herobreak'
  },
  {
    key:'Roycejh',
    url:'https://www.github.com/roycejh',
  },
];

const header = () => {
  return <Text>URLs</Text>;
};

class ListURLs extends Component {
  constructor(props) {
    super(props);
    this.renderBrowser = this.renderBrowser.bind(this);
    this._renderItem = this._renderItem.bind(this);
  }

  renderBrowser(url, title) {
    return () => {Actions.browser({url, title});};
  }

  _renderItem({item}) {
    return <TouchableOpacity onPress={this.renderBrowser(item.url, item.key)} style={styles.row}>
      <Text>{item.key}</Text>
    </TouchableOpacity>;
  }

  render() {
    return(
      <FlatList
        style={styles.rowContainer}
        data={urls}
        renderItem={this._renderItem}>
      </FlatList>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    marginTop: 70
  }
});

export default ListURLs;
