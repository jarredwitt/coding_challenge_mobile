import React, { PropTypes } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
} from 'react-native';

import StyledText from 'components/StyledText';

const { width, height } = Dimensions.get('window');

const MessageOverlay = props => (
  <View style={styles.container}>
    <View style={styles.messageWrapper}>
      <StyledText>{props.message}</StyledText>
    </View>
  </View>
);

MessageOverlay.propTypes = {
  message: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width,
    height,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  messageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MessageOverlay;
