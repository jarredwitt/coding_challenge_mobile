import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Button from 'components/Button';
import CircleButton from 'components/CircleButton';
import Container from 'components/Container';
import FormInput from 'components/FormInput';
import StyledText from 'components/StyledText';

const HouseholdMemberInfo = (props) => {
  const { back, license_plate, make, model, year, submit, updateProperty } = props;

  return (
    <Container>
      <KeyboardAwareScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps keyboardDismissMode="on-drag">
        <CircleButton size={20} icon="close" containerStyle={styles.backButton} onPress={back} />
        <StyledText style={[styles.titleBase, styles.title]}>Household Vehicle.</StyledText>
        <StyledText style={[styles.titleBase, styles.subtitle]}>Tell us about this automobile.</StyledText>
        <View style={styles.form}>
          <FormInput name="make" label="Make" value={make} onChangeText={updateProperty} />
          <FormInput name="model" label="Model" value={model} onChangeText={updateProperty} autoCorrect={false} />
          <FormInput name="year" label="Year" value={year} onChangeText={updateProperty} keyboardType="number-pad" />
          <FormInput name="license_plate" label="License plate" value={license_plate} onChangeText={updateProperty} autoCorrect={false} autoCapitalize="characters" />
        </View>
        <Button label="Save" hideIcon onPress={submit} />
      </KeyboardAwareScrollView>
    </Container>
  );
};

HouseholdMemberInfo.propTypes = {
  back: PropTypes.func,
  license_plate: PropTypes.string,
  make: PropTypes.string,
  model: PropTypes.string,
  submit: PropTypes.func,
  updateProperty: PropTypes.func,
  year: PropTypes.string,
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
