import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

class Row extends Component {

  componentDidMount() {
    console.log('componentDidMount', this.props.item.key);
  }

  render() {
    return <View style={styles.container}>
      <Text style={styles.text}>{ this.props.item.key }</Text>
    </View>;
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 32,
  }
});

export default Row;
