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
import RadioButtons from 'components/RadioButtons';
import StyledText from 'components/StyledText';

const HouseholdMemberInfo = (props) => {
  const { age, email, first, gender, last, setGender, submit, updateProperty } = props;

  return (
    <Container>
      <KeyboardAwareScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps keyboardDismissMode="on-drag">
        <CircleButton size={20} icon="close" containerStyle={styles.backButton} onPress={props.back} />
        <StyledText style={[styles.titleBase, styles.title]}>Household Member.</StyledText>
        <StyledText style={[styles.titleBase, styles.subtitle]}>Tell us about this person.</StyledText>
        <View style={styles.form}>
          <RadioButtons options={['Female', 'Male', 'Other']} value={gender} onPress={setGender} />
          <FormInput name="first" label="First" value={first} onChangeText={updateProperty} autoCorrect={false} />
          <FormInput name="last" label="Last" value={last} onChangeText={updateProperty} autoCorrect={false} />
          <FormInput name="email" label="Email" value={email} onChangeText={updateProperty} keyboardType="email-address" autoCapitalize="none" autoCorrect={false} />
          <FormInput name="age" label="Age" value={age} onChangeText={updateProperty} keyboardType="number-pad" />
        </View>
        <Button label="Save" onPress={submit} hideIcon />
      </KeyboardAwareScrollView>
    </Container>
  );
};

HouseholdMemberInfo.propTypes = {
  age: PropTypes.string,
  back: PropTypes.func,
  email: PropTypes.string,
  first: PropTypes.string,
  gender: PropTypes.string,
  last: PropTypes.string,
  setGender: PropTypes.func,
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
