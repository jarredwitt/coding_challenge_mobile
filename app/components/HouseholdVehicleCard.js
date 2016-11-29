import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import CircleButton from 'components/CircleButton';
import colors from 'constants/colors';
import StyledText from 'components/StyledText';

class HouseholdVehicleCard extends Component {
  static propTypes = {
    editPress: PropTypes.func,
    hideButtons: PropTypes.bool,
    id: PropTypes.number,
    licensePlate: PropTypes.string,
    make: PropTypes.string,
    model: PropTypes.string,
    owner: PropTypes.string,
    removePress: PropTypes.func,
    year: PropTypes.string,
  }

  _onEditPress = () => this.props.editPress(this.props.id);
  _onRemovePress = () => this.props.removePress(this.props.id);
  render() {
    const { make, model, owner, year, licensePlate, hideButtons } = this.props;

    return (
      <View style={styles.vehicle}>
        <View style={styles.textContainer}>
          <StyledText style={styles.name}>{`${make} ${model}`}</StyledText>
          <StyledText>{`${year} - ${licensePlate}`}</StyledText>
          <StyledText>{`Owner: ${owner}`}</StyledText>
        </View>
        {!hideButtons &&
          <View style={styles.bottomButtons}>
            <CircleButton icon="pencil" containerStyle={styles.icon} onPress={this._onEditPress} />
            <CircleButton icon="remove" containerStyle={styles.icon} onPress={this._onRemovePress} />
          </View>
        }
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
    marginBottom: 10,
  },
  vehicle: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
  },
  textContainer: {
    marginBottom: 10,
  },
});

export default HouseholdVehicleCard;
