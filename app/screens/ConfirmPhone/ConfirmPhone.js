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

const ConfirmPhone = props => (
  <Container style={styles.container}>
    <CircleButton size={20} containerStyle={styles.backButton} onPress={props.back} />
    <StyledText style={[styles.titleBase, styles.title]}>We sent you a text!</StyledText>
    <StyledText style={[styles.titleBase, styles.subtitle]}>The text contains a confirmation code.</StyledText>
    <View style={styles.form}>
      <FormInput
        name="confirmationCode"
        value={props.confirmationCode}
        labelHidden placeholder="Enter the confirmation code here..."
        onChangeText={props.updateConfirmationCode}
        keyboardType="number-pad"
      />
    </View>
    <Button label="Confirm phone" onPress={props.submit} />
  </Container>
);

ConfirmPhone.propTypes = {
  back: PropTypes.func,
  confirmationCode: PropTypes.string,
  submit: PropTypes.func,
  updateConfirmationCode: PropTypes.func,
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
