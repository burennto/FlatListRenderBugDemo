import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

import Row from './Row';

class FlatListRenderBugDemo extends Component {

  constructor(props) {
    super(props);

    const data = Array(30).fill().map((e, i) => {
      return { key: i+1 }
    });

    this.state = { data };
  }

  renderItem(item) {
    console.log('renderItem', item.item.key);
    return <Row item={item.item} />;
  }

  render() {
    return <View style={styles.container}>
      <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
        initialNumToRender={5} />
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FlatListRenderBugDemo;
