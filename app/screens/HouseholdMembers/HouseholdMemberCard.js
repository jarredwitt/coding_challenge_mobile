import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import CircleButton from 'components/CircleButton';
import colors from 'constants/colors';
import StyledText from 'components/StyledText';

const HouseholdMemberCard = (props) => {
  const { id, first, last, gender, age, email } = props;

  return (
    <View key={id} style={styles.member}>
      <StyledText style={styles.name}>{`${first} ${last}`}</StyledText>
      <StyledText>{`${age} - ${gender}`}</StyledText>
      <StyledText>{email}</StyledText>
      <View style={styles.bottomButtons}>
        <CircleButton icon="pencil" containerStyle={styles.icon} />
        <CircleButton icon="remove" containerStyle={styles.icon} />
      </View>
    </View>
  );
};

HouseholdMemberCard.propTypes = {
  age: PropTypes.string,
  email: PropTypes.string,
  first: PropTypes.string,
  gender: PropTypes.string,
  id: PropTypes.number,
  last: PropTypes.string,
};

const styles = StyleSheet.create({
  bottomButtons: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 20,
    marginVertical: 10,
  },
  member: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
  },
});

export default HouseholdMemberCard;
