import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import CircleButton from 'components/CircleButton';
import colors from 'constants/colors';
import StyledText from 'components/StyledText';

class HouseholdMemberCard extends Component {
  static propTypes = {
    age: PropTypes.string,
    editPress: PropTypes.func,
    email: PropTypes.string,
    first: PropTypes.string,
    gender: PropTypes.string,
    id: PropTypes.number,
    last: PropTypes.string,
    removePress: PropTypes.func,
  }

  _onEditPress = () => this.props.editPress(this.props.id);
  _onRemovePress = () => this.props.removePress(this.props.id);
  render() {
    const { first, last, gender, age, email } = this.props;

    return (
      <View style={styles.member}>
        <StyledText style={styles.name}>{`${first} ${last}`}</StyledText>
        <StyledText>{`${age} - ${gender}`}</StyledText>
        <StyledText>{email}</StyledText>
        <View style={styles.bottomButtons}>
          <CircleButton icon="pencil" containerStyle={styles.icon} onPress={this._onEditPress} />
          <CircleButton icon="remove" containerStyle={styles.icon} onPress={this._onRemovePress} />
        </View>
      </View>
    );
  }
}

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
