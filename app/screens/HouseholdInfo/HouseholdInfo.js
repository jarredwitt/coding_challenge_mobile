import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Button from 'components/Button';
import colors from 'constants/colors';
import FormInput from 'components/FormInput';
import StyledText from 'components/StyledText';

import Router from 'Router';

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
    <Button label="Next" onPress={() => props.navigator.push(Router.getRoute('householdMembersScreen'))} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.blue,
  },
  form: {
    marginBottom: 20,
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
