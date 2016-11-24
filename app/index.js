import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import colors from 'constants/colors';

import ConfirmPhoneScreen from 'screens/ConfirmPhone';
import HouseholdInfoScreen from 'screens/HouseholdInfo';
import HouseholdMembersScreen from 'screens/HouseholdMembers';
import PhoneEntryScreen from 'screens/PhoneEntry';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HouseholdMembersScreen />
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
