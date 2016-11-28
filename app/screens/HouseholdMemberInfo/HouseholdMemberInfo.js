import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Button from 'components/Button';
import Container from 'components/Container';
import CircleButton from 'components/CircleButton';
import FormInput from 'components/FormInput';
import StyledText from 'components/StyledText';

const HouseholdMemberInfo = props => (
  <Container>
    <KeyboardAwareScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps keyboardDismissMode="on-drag">
      <CircleButton size={20} icon="close" containerStyle={styles.backButton} onPress={props.back} />
      <StyledText style={[styles.titleBase, styles.title]}>Household Member.</StyledText>
      <StyledText style={[styles.titleBase, styles.subtitle]}>Tell us about this person.</StyledText>
      <View style={styles.form}>
        <FormInput name="first" label="First" value={props.first} onChangeText={props.updateProperty} />
        <FormInput name="last" label="Last" value={props.last} onChangeText={props.updateProperty} />
        <FormInput name="email" label="Email" value={props.email} onChangeText={props.updateProperty} />
        <FormInput name="age" label="Age" value={props.age} onChangeText={props.updateProperty} />
        <FormInput name="gender" label="Gender" value={props.gender} onChangeText={props.updateProperty} />
      </View>
      <Button label="Save" onPress={props.submit} hideIcon />
    </KeyboardAwareScrollView>
  </Container>
);

HouseholdMemberInfo.propTypes = {
  age: PropTypes.string,
  back: PropTypes.func,
  email: PropTypes.string,
  first: PropTypes.string,
  gender: PropTypes.string,
  last: PropTypes.string,
  submit: PropTypes.func,
  updateProperty: PropTypes.func,
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

export default HouseholdMemberInfo;
