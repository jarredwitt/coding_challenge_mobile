import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Button from 'components/Button';
import colors from 'constants/colors';
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
    paddingHorizontal: 20,
    backgroundColor: colors.blue,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  titleBase: {
    marginBottom: 10,
  },
});

export default HouseholdInfo;
