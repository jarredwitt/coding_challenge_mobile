import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Button from 'components/Button';
import Container from 'components/Container';
import CircleButton from 'components/CircleButton';
import StyledText from 'components/StyledText';

const HouseholdVehicles = props => (
  <Container style={styles.container}>
    <View style={styles.topButtonContainer}>
      <CircleButton size={20} onPress={() => props.navigator.pop()} />
      <CircleButton size={20} icon="plus" />
    </View>
    <StyledText style={[styles.titleBase, styles.title]}>Household Vehicles.</StyledText>
    <StyledText style={[styles.titleBase, styles.subtitle]}>These are the vehicles you own.</StyledText>
    <Button label="Next" />
  </Container>
);

HouseholdVehicles.propTypes = {
  navigator: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 32,
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
  topButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default HouseholdVehicles;
