import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Button from 'components/Button';
import Container from 'components/Container';
import StyledText from 'components/StyledText';

import Router from 'Router';

const HouseholdInfo = props => (
  <Container style={styles.container}>
    <StyledText style={[styles.titleBase, styles.title]}>Household Members.</StyledText>
    <StyledText style={[styles.titleBase, styles.subtitle]}>These are the people you live with.</StyledText>
    <Button label="Next" onPress={() => props.navigator.push(Router.getRoute('householdVehiclesScreen'))} />
  </Container>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 20,
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
