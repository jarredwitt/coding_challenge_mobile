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

import Router from 'Router';

const HouseholdInfo = props => (
  <Container>
    <KeyboardAwareScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps keyboardDismissMode="on-drag">
      <CircleButton size={20} containerStyle={styles.backButton} onPress={() => props.navigator.pop()} />
      <StyledText style={[styles.titleBase, styles.title]}>Household Info.</StyledText>
      <StyledText style={[styles.titleBase, styles.subtitle]}>Tell us about your home.</StyledText>
      <View style={styles.form}>
        <FormInput label="Address" />
        <FormInput label="Address 2" />
        <FormInput label="City" />
        <FormInput label="State" />
        <FormInput label="Zip" />
        <FormInput label="Number of bedrooms" />
      </View>
      <Button label="Next" onPress={() => props.navigator.push(Router.getRoute('householdMembersScreen'))} />
    </KeyboardAwareScrollView>
  </Container>
);

HouseholdInfo.propTypes = {
  navigator: PropTypes.object,
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
