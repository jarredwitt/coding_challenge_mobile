import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import colors from 'constants/colors';

const Container = props => (
  <View style={[styles.container, props.style]}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
});

Container.propTypes = {
  children: PropTypes.node,
  style: View.propTypes.style,
};

export default Container;
