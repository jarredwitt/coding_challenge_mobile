import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import colors from 'constants/colors';

import PhoneEntryScreen from 'screens/PhoneEntry';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PhoneEntryScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
});

export default App;
