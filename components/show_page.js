import React, { Component } from 'react';
import BrowserView from './browser_view';
import {
  View,
  TouchableOpacity,
  Button,
  StyleSheet
} from 'react-native';

class ShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = { startTime: Date.now() };
  }

  render() {
    return(<View style={styles.container}>
      <BrowserView style={{ marginBottom: 100 }} url={this.props.url} title={this.props.title}/>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButtons}>
          <Button style={styles.actions} title='Like'></Button>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButtons}>
          <Button style={styles.actions} title='Dislike'></Button>
        </TouchableOpacity>
      </View>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 63,
  },
  actionsContainer: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    borderTopWidth: 2,
    borderTopColor:  '#7E8687'
  },
  actionButtons: {
    borderWidth: 1,
    width: '50%',
  },
  actions: {
    color: 'black'
  }
});

export default ShowPage;
