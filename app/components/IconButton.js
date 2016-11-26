import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from 'constants/colors';

const IconButton = (props) => {
  const { containerStyle, icon, onPress, size } = props;
  const containerSize = size * 2;

  return (
    <TouchableHighlight style={[styles.container, containerStyle, { width: containerSize, height: containerSize, borderRadius: size }]} onPress={onPress} underlayColor={colors.yellow_300}>
      <View style={styles.wrapper}>
        <Icon name={icon} size={size} style={styles.icon} />
      </View>
    </TouchableHighlight>
  );
};

IconButton.propTypes = {
  icon: PropTypes.string,
  onPress: PropTypes.func,
  size: PropTypes.number,
  containerStyle: View.propTypes.style,
};

IconButton.defaultProps = {
  icon: 'arrow-left',
  onPress: () => true,
  size: 20,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.yellow,
  },
  icon: {
    color: colors.white,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IconButton;
