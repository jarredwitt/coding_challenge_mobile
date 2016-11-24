import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Button from 'components/Button';
import colors from 'constants/colors';
import FormInput from 'components/FormInput';
import StyledText from 'components/StyledText';

import Router from 'Router';

const PhoneEntry = props => (
  <View style={styles.container}>
    <StyledText style={[styles.titleBase, styles.title]}>Let's confirm your phone number.</StyledText>
    <StyledText style={[styles.titleBase, styles.subtitle]}>We use this to identify your application.</StyledText>
    <View style={styles.form}>
      <FormInput labelHidden placeholder="Enter your phone number here..." />
    </View>
    <Button label="Send confirmation" onPress={() => props.navigator.push(Router.getRoute('confirmPhoneScreen'))} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.blue,
  },
  form: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  titleBase: {
    marginBottom: 10,
  },
});

export default PhoneEntry;
