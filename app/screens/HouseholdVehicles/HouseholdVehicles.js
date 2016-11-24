import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Button from 'components/Button';
import StyledText from 'components/StyledText';

const HouseholdInfo = props => (
  <View style={styles.container}>
    <StyledText style={[styles.titleBase, styles.title]}>Household Vehicles.</StyledText>
    <StyledText style={[styles.titleBase, styles.subtitle]}>These are the vehicles you own.</StyledText>
    <Button label="Next" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  subtitle: {
    fontSize: 16,
  },
  title: {
    fontSize: 28,
  },
  titleBase: {
    marginBottom: 10,
    fontWeight: '700',
  },
});

export default HouseholdInfo;
