import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Button from 'components/Button';
import Container from 'components/Container';
import FormInput from 'components/FormInput';
import CircleButton from 'components/CircleButton';
import StyledText from 'components/StyledText';

const HouseholdInfo = props => (
  <Container>
    <KeyboardAwareScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps keyboardDismissMode="on-drag">
      <CircleButton size={20} containerStyle={styles.backButton} onPress={props.back} />
      <StyledText style={[styles.titleBase, styles.title]}>Household Info.</StyledText>
      <StyledText style={[styles.titleBase, styles.subtitle]}>Tell us about your home.</StyledText>
      <View style={styles.form}>
        <FormInput name="address" label="Address" value={props.address} onChangeText={props.updateProperty} />
        <FormInput name="city" label="City" value={props.city} onChangeText={props.updateProperty} />
        <FormInput name="state" label="State" value={props.state} onChangeText={props.updateProperty} maxLength={2} autoCorrect={false} autoCapitalize="characters" />
        <FormInput name="zip" label="Zip" value={props.zip} onChangeText={props.updateProperty} keyboardType="number-pad" />
        <FormInput name="number_of_bedrooms" label="Number of bedrooms" value={props.number_of_bedrooms} onChangeText={props.updateProperty} keyboardType="number-pad" />
      </View>
      <Button label="Next" onPress={props.submit} />
    </KeyboardAwareScrollView>
  </Container>
);

HouseholdInfo.propTypes = {
  address: PropTypes.string,
  back: PropTypes.func,
  city: PropTypes.string,
  number_of_bedrooms: PropTypes.number,
  state: PropTypes.string,
  submit: PropTypes.func,
  updateProperty: PropTypes.func,
  zip: PropTypes.string,
};

const styles = StyleSheet.create({
  backButton: {
    marginBottom: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 30,
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

export default HouseholdInfo;
