import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import colors from 'constants/colors';
import StyledText from 'components/StyledText';

class HouseholdInfoCard extends Component {
  static propTypes = {
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
    numberOfBedrooms: PropTypes.string,
  }

  render() {
    const { address, city, state, zip, numberOfBedrooms } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <StyledText>{address}</StyledText>
          <StyledText>{`${city}, ${state} ${zip}`}</StyledText>
          <StyledText>{`${numberOfBedrooms} bedroom(s)`}</StyledText>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
  textContainer: {
    marginBottom: 10,
  },
});

export default HouseholdInfoCard;
