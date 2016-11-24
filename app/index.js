import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import colors from 'constants/colors';

import ConfirmPhoneScreen from 'screens/ConfirmPhone';
import HouseholdInfoScreen from 'screens/HouseholdInfo';
import HouseholdMemberInfoScreen from 'screens/HouseholdMemberInfo';
import HouseholdMembersScreen from 'screens/HouseholdMembers';
import HouseholdVehiclesScreen from 'screens/HouseholdVehicles';
import PhoneEntryScreen from 'screens/PhoneEntry';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HouseholdVehiclesScreen />
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
