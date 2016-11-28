import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Button from 'components/Button';
import Container from 'components/Container';
import FormInput from 'components/FormInput';
import StyledText from 'components/StyledText';

const PhoneEntry = props => (
  <Container style={styles.container}>
    <StyledText style={[styles.titleBase, styles.title]}>Let's confirm your phone number.</StyledText>
    <StyledText style={[styles.titleBase, styles.subtitle]}>We use this to identify your application.</StyledText>
    <View style={styles.form}>
      <FormInput
        name="phoneNumber"
        value={props.phoneNumber}
        onChangeText={props.updatePhoneNumber}
        labelHidden
        placeholder="Enter your phone number here..."
        keyboardType="number-pad"
      />
    </View>
    <Button label="Send confirmation" onPress={props.submit} />
  </Container>
);

PhoneEntry.propTypes = {
  phoneNumber: PropTypes.string,
  submit: PropTypes.func,
  updatePhoneNumber: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 64,
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
