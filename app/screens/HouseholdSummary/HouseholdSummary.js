import React, { PropTypes } from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';

import Button from 'components/Button';
import Container from 'components/Container';
import CircleButton from 'components/CircleButton';
import HouseholdInfoCard from 'components/HouseholdInfoCard';
import HouseholdMemberCard from 'components/HouseholdMemberCard';
import HouseholdVehicleCard from 'components/HouseholdVehicleCard';
import LinkButton from 'components/LinkButton';
import StyledText from 'components/StyledText';

const HouseholdInfo = (props) => {
  const { back, householdInfo, householdMembers, householdVehicles, save, submit } = props;

  return (
    <Container>
      <ScrollView contentContainerStyle={styles.container}>
        <CircleButton size={20} containerStyle={styles.backButton} onPress={back} />
        <StyledText style={[styles.titleBase, styles.title]}>Household Summary.</StyledText>
        <StyledText style={[styles.titleBase, styles.subtitle]}>Household Info.</StyledText>
        <HouseholdInfoCard {...householdInfo} />
        <StyledText style={[styles.titleBase, styles.subtitle]}>Household Members.</StyledText>
        {householdMembers.map(member => <HouseholdMemberCard key={member.id} {...member} hideButtons />)}
        <StyledText style={[styles.titleBase, styles.subtitle]}>Household Vehicles.</StyledText>
        {householdVehicles.map(vehicle => <HouseholdVehicleCard key={vehicle.id} {...vehicle} hideButtons />)}
        <Button label="Submit" onPress={submit} />
        <LinkButton label="Save as draft" onPress={save} />
      </ScrollView>
    </Container>
  );
};

HouseholdInfo.propTypes = {
  back: PropTypes.func,
  householdInfo: PropTypes.object,
  householdMembers: PropTypes.array,
  householdVehicles: PropTypes.array,
  save: PropTypes.func,
  submit: PropTypes.func,
};

const styles = StyleSheet.create({
  backButton: {
    marginBottom: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 30,
  },
  form: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
  },
  titleBase: {
    marginBottom: 10,
  },
});

export default HouseholdInfo;
