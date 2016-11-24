import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Button from 'components/Button';
import FormInput from 'components/FormInput';
import StyledText from 'components/StyledText';

const PhoneEntry = props => (
  <View style={styles.container}>
    <StyledText style={[styles.titleBase, styles.title]}>Let's confirm your phone number.</StyledText>
    <FormInput labelHidden placeholder="Enter your phone number here..." />
    <StyledText style={[styles.titleBase, styles.subtitle]}>We use this to identify your application.</StyledText>
    <Button label="Send confirmation" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  form: {
    alignSelf: 'stretch',
  },
  subtitle: {
    fontSize: 16,
  },
  title: {
    fontSize: 28,
  },
  titleBase: {
    marginVertical: 20,
    fontWeight: '700',
  },
});

export default PhoneEntry;
