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
    <StyledText style={[styles.titleBase, styles.subtitle]}>We use this to identify your application.</StyledText>
    <View style={styles.form}>
      <FormInput labelHidden placeholder="Enter your phone number here..." />
    </View>
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
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
  },
  title: {
    fontSize: 28,
  },
  titleBase: {
    marginBottom: 10,
    fontWeight: '700',
  },
});

export default PhoneEntry;
