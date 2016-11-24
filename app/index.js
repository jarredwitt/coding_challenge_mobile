import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import StyledText from 'components/StyledText';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StyledText>This is my app.</StyledText>
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
