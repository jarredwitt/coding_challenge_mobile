import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Button from 'components/Button';
import FormInput from 'components/FormInput';
import StyledText from 'components/StyledText';

const HouseholdMemberInfo = props => (
  <View style={styles.container}>
    <StyledText style={[styles.titleBase, styles.title]}>Household Member.</StyledText>
    <StyledText style={[styles.titleBase, styles.subtitle]}>Tell us about this person.</StyledText>
    <View style={styles.form}>
      <FormInput label="First" />
      <FormInput label="Last" />
      <FormInput label="Email" />
      <FormInput label="Age" />
      <FormInput label="Gender" />
    </View>
    <Button label="Save" />
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

export default HouseholdMemberInfo;
