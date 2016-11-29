import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
} from 'react-native';

import StyledText from 'components/StyledText';

const LinkButton = props => (
  <TouchableHighlight onPress={props.onPress} underlayColor="#0000">
    <View style={styles.container}>
      <StyledText style={styles.text}>{props.label}</StyledText>
    </View>
  </TouchableHighlight>
);

LinkButton.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
};

LinkButton.defaultProps = {
  onPress: () => true,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    paddingHorizontal: 10,
    fontWeight: '700',
    fontSize: 20,
    paddingVertical: 10,
  },
});

export default LinkButton;
