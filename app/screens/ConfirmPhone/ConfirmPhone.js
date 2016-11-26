import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Button from 'components/Button';
import Container from 'components/Container';
import FormInput from 'components/FormInput';
import CircleButton from 'components/CircleButton';
import StyledText from 'components/StyledText';

import Router from 'Router';

const ConfirmPhone = props => (
  <Container style={styles.container}>
    <CircleButton size={20} containerStyle={styles.backButton} onPress={() => props.navigator.pop()} />
    <StyledText style={[styles.titleBase, styles.title]}>We sent you a text!</StyledText>
    <StyledText style={[styles.titleBase, styles.subtitle]}>The text contains a confirmation code.</StyledText>
    <View style={styles.form}>
      <FormInput labelHidden placeholder="Enter the confirmation code here..." />
    </View>
    <Button label="Confirm phone" onPress={() => props.navigator.push(Router.getRoute('householdInfoScreen'))} />
  </Container>
);

ConfirmPhone.propTypes = {
  navigator: PropTypes.object,
};

const styles = StyleSheet.create({
  backButton: {
    marginBottom: 20,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 32,
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
