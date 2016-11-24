import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Button from 'components/Button';
import FormInput from 'components/FormInput';
import StyledText from 'components/StyledText';

const ConfirmPhone = props => (
  <View style={styles.container}>
    <StyledText style={[styles.titleBase, styles.title]}>We sent you a text!</StyledText>
    <StyledText style={[styles.titleBase, styles.subtitle]}>The text contained a confirmation code.</StyledText>
    <View style={styles.form}>
      <FormInput labelHidden placeholder="Enter the confirmation code here..." />
    </View>
    <Button label="Confirm phone" />
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
    marginBottom: 20,
    fontWeight: '700',
  },
});

export default ConfirmPhone;
