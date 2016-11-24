import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Button from 'components/Button';
import FormInput from 'components/FormInput';
import StyledText from 'components/StyledText';

const HouseholdInfo = props => (
  <View style={styles.container}>
    <StyledText style={[styles.titleBase, styles.title]}>Household Info.</StyledText>
    <StyledText style={[styles.titleBase, styles.subtitle]}>Tell us about your home.</StyledText>
    <View style={styles.form}>
      <FormInput label="Address" />
      <FormInput label="Address 2" />
      <FormInput label="City" />
      <FormInput label="State" />
      <FormInput label="Zip" />
      <FormInput label="Number of bedrooms" />
    </View>
    <Button label="Next" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  form: {
    marginBottom: 20,
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
