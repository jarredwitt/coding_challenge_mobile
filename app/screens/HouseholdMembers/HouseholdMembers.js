import React, { PropTypes } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import Button from 'components/Button';
import Container from 'components/Container';
import CircleButton from 'components/CircleButton';
import HouseholdMemberCard from 'components/HouseholdMemberCard';
import StyledText from 'components/StyledText';

const HouseholdInfo = (props) => {
  const { addMember, back, editMember, householdMembers, next, removeMember } = props;

  return (
    <Container>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.topButtonContainer}>
          <CircleButton size={20} onPress={back} />
          <CircleButton size={20} icon="plus" onPress={addMember} />
        </View>
        <StyledText style={[styles.titleBase, styles.title]}>Household Members.</StyledText>
        <StyledText style={[styles.titleBase, styles.subtitle]}>These are the people you live with.</StyledText>
        <View style={styles.membersContainer}>
          {householdMembers.map(member => <HouseholdMemberCard key={member.id} {...member} editPress={editMember} removePress={removeMember} />)}
        </View>
        <Button label="Next" onPress={next} />
      </ScrollView>
    </Container>
  );
};

HouseholdInfo.propTypes = {
  addMember: PropTypes.func,
  back: PropTypes.func,
  editMember: PropTypes.func,
  householdMembers: PropTypes.array,
  next: PropTypes.func,
  removeMember: PropTypes.func,
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingVertical: 32,
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
