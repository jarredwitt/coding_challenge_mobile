import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is my app.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
