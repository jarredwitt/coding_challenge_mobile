import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Button from 'components/Button';
import CircleButton from 'components/CircleButton';
import Container from 'components/Container';
import StyledText from 'components/StyledText';

import HouseholdVehicleCard from './HouseholdVehicleCard';

const HouseholdVehicles = (props) => {
  const { addVehicle, back, householdVehicles, next } = props;

  return (
    <Container style={styles.container}>
      <View style={styles.topButtonContainer}>
        <CircleButton size={20} onPress={back} />
        <CircleButton size={20} icon="plus" onPress={addVehicle} />
      </View>
      <StyledText style={[styles.titleBase, styles.title]}>Household Vehicles.</StyledText>
      <StyledText style={[styles.titleBase, styles.subtitle]}>These are the vehicles you own.</StyledText>
      <View>
        {householdVehicles.map(member => <HouseholdVehicleCard key={member.id} {...member} editPress={props.editVehicle} removePress={props.removeVehicle} />)}
      </View>
      <Button label="Next" onPress={next} />
    </Container>
  );
};

HouseholdVehicles.propTypes = {
  addVehicle: PropTypes.func,
  back: PropTypes.func,
  editVehicle: PropTypes.func,
  householdVehicles: PropTypes.array,
  next: PropTypes.func,
  removeVehicle: PropTypes.func,
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
