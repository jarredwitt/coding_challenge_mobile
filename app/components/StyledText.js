import React, { PropTypes } from 'react';
import { StyleSheet, Text } from 'react-native';

import colors from 'constants/colors';

const StyledText = props => (
  <Text style={[styles.base, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  base: {
    color: colors.black,
    fontSize: 14,
    fontFamily: 'Avenir Next',
  },
});

StyledText.propTypes = {
  children: PropTypes.string,
  style: Text.propTypes.style,
};

export default StyledText;
