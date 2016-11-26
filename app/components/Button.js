import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from 'constants/colors';
import StyledText from 'components/StyledText';

const Button = props => (
  <TouchableHighlight style={styles.container} onPress={props.onPress} underlayColor={colors.yellow_300}>
    <View style={styles.wrapper}>
      <StyledText style={styles.text}>{props.label}</StyledText>
      {!props.hideIcon && <Icon name={props.icon} size={20} color={colors.white} />}
    </View>
  </TouchableHighlight>
);

Button.propTypes = {
  hideIcon: PropTypes.bool,
  icon: PropTypes.string,
  label: PropTypes.string,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  hideIcon: false,
  icon: 'arrow-right',
  onPress: () => true,
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: colors.yellow,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontWeight: '700',
    fontSize: 20,
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Button;
