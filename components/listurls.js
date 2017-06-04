import React, { Component } from 'react';
import {
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  View
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

const renderSeparator = () => {
  return <View style={styles.separator}>
  </View>;
};

class ListURLs extends Component {
  constructor(props) {
    super(props);
    this.renderBrowser = this.renderBrowser.bind(this);
    this._renderItem = this._renderItem.bind(this);
  }

  renderBrowser(url, title) {
    return () => {Actions.show({url, title});};
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
        ItemSeparatorComponent={renderSeparator}
        renderItem={this._renderItem}>
      </FlatList>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    height: 40,
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    marginTop: 63,
  },
  separator: {
    height: 1,
    backgroundColor: "#CED0CE",
  }
});

export default ListURLs;
