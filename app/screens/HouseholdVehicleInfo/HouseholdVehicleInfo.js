import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Button from 'components/Button';
import Container from 'components/Container';
import FormInput from 'components/FormInput';
import StyledText from 'components/StyledText';

const HouseholdMemberInfo = props => (
  <Container style={styles.container}>
    <StyledText style={[styles.titleBase, styles.title]}>Household Vehicle.</StyledText>
    <StyledText style={[styles.titleBase, styles.subtitle]}>Tell us about this automobile.</StyledText>
    <View style={styles.form}>
      <FormInput label="Make" />
      <FormInput label="Model" />
      <FormInput label="Year" />
      <FormInput label="License plate" />
    </View>
    <Button label="Save" />
  </Container>
);

const styles = StyleSheet.create({
  container: {
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
