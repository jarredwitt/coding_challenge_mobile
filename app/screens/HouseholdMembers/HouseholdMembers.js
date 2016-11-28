import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Button from 'components/Button';
import Container from 'components/Container';
import CircleButton from 'components/CircleButton';
import StyledText from 'components/StyledText';

import HouseholdMemberCard from './HouseholdMemberCard';

const HouseholdInfo = props => (
  <Container style={styles.container}>
    <View style={styles.topButtonContainer}>
      <CircleButton size={20} onPress={props.back} />
      <CircleButton size={20} icon="plus" onPress={props.addMember} />
    </View>
    <StyledText style={[styles.titleBase, styles.title]}>Household Members.</StyledText>
    <StyledText style={[styles.titleBase, styles.subtitle]}>These are the people you live with.</StyledText>
    <View style={styles.membersContainer}>
      {props.householdMembers.map(member => <HouseholdMemberCard key={member.id} {...member} editPress={props.editMember} removePress={props.removeMember} />)}
    </View>
    <Button label="Next" onPress={props.next} />
  </Container>
);

HouseholdInfo.propTypes = {
  addMember: PropTypes.func,
  back: PropTypes.func,
  editMember: PropTypes.func,
  householdMembers: PropTypes.array,
  next: PropTypes.func,
  removeMember: PropTypes.func,
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

export default HouseholdInfo;
