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

const ConfirmPhone = props => (
  <View style={styles.container}>
    <StyledText style={[styles.titleBase, styles.title]}>We sent you a text!</StyledText>
    <StyledText style={[styles.titleBase, styles.subtitle]}>The text contains a confirmation code.</StyledText>
    <View style={styles.form}>
      <FormInput labelHidden placeholder="Enter the confirmation code here..." />
    </View>
    <Button label="Confirm phone" onPress={() => props.navigator.push(Router.getRoute('householdInfoScreen'))} />
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

export default ConfirmPhone;
