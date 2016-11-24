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
    <StyledText style={[styles.titleBase, styles.title]}>Household Vehicle.</StyledText>
    <StyledText style={[styles.titleBase, styles.subtitle]}>Tell us about this automobile.</StyledText>
    <View style={styles.form}>
      <FormInput label="Make" />
      <FormInput label="Model" />
      <FormInput label="Year" />
      <FormInput label="License plate" />
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

export default HouseholdMemberInfo;
