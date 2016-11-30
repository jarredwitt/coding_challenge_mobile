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
import RadioButtons from 'components/RadioButtons';
import StyledText from 'components/StyledText';

const HouseholdMemberInfo = (props) => {
  const { back, householdMembers, licensePlate, make, model, ownerId, year, setVehicleOwner, submit, updateProperty } = props;

  return (
    <Container>
      <KeyboardAwareScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps keyboardDismissMode="on-drag">
        <CircleButton size={20} icon="close" containerStyle={styles.backButton} onPress={back} />
        <StyledText style={[styles.titleBase, styles.title]}>Household Vehicle.</StyledText>
        <StyledText style={[styles.titleBase, styles.subtitle]}>Tell us about this automobile.</StyledText>
        <View style={styles.form}>
          <StyledText>Select an owner for this vehicle</StyledText>
          <RadioButtons options={householdMembers} value={ownerId} onPress={setVehicleOwner} />
          <FormInput name="make" label="Make" value={make} onChangeText={updateProperty} />
          <FormInput name="model" label="Model" value={model} onChangeText={updateProperty} autoCorrect={false} />
          <FormInput name="year" label="Year" value={year} valueType="number" onChangeText={updateProperty} keyboardType="number-pad" />
          <FormInput name="licensePlate" label="License plate" value={licensePlate} onChangeText={updateProperty} autoCorrect={false} autoCapitalize="characters" />
        </View>
        <Button label="Save" hideIcon onPress={submit} />
      </KeyboardAwareScrollView>
    </Container>
  );
};

HouseholdMemberInfo.propTypes = {
  back: PropTypes.func,
  householdMembers: PropTypes.array,
  licensePlate: PropTypes.string,
  make: PropTypes.string,
  model: PropTypes.string,
  ownerId: PropTypes.number,
  setVehicleOwner: PropTypes.func,
  submit: PropTypes.func,
  updateProperty: PropTypes.func,
  year: PropTypes.number,
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
