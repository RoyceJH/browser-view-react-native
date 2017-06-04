import React, { Component } from 'react';
import {
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

const urls = [
  {key:'www.google.com'},
  {key:'www.facebook.com'},
  {key:'www.github.com'},
  {key:'www.linkedin.com'},
  {key:'www.react.org'},
  {key:'www.roycekim.com'},
  {key:'www.bettergoat.us'},
  {key:'www.roycekim.com/herobreak'},
  {key:'www.github.com/roycejh'},
];

const header = () => {
  return <Text>URLs</Text>;
};

class ListURLs extends Component {
  _renderItem({item}) {
    return <TouchableOpacity onPress={} style={styles.row}>
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
