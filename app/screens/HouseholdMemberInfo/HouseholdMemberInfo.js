import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { NavigationStyles } from '@exponent/ex-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Button from 'components/Button';
import Container from 'components/Container';
import CircleButton from 'components/CircleButton';
import FormInput from 'components/FormInput';
import StyledText from 'components/StyledText';

const HouseholdMemberInfo = props => (
  <Container>
    <KeyboardAwareScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps keyboardDismissMode="on-drag">
      <CircleButton size={20} icon="close" containerStyle={styles.backButton} onPress={() => props.navigator.pop()} />
      <StyledText style={[styles.titleBase, styles.title]}>Household Member.</StyledText>
      <StyledText style={[styles.titleBase, styles.subtitle]}>Tell us about this person.</StyledText>
      <View style={styles.form}>
        <FormInput label="First" />
        <FormInput label="Last" />
        <FormInput label="Email" />
        <FormInput label="Age" />
        <FormInput label="Gender" />
      </View>
      <Button label="Save" hideIcon />
    </KeyboardAwareScrollView>
  </Container>
);

HouseholdMemberInfo.route = {
  styles: {
    ...NavigationStyles.SlideVertical,
  },
};

HouseholdMemberInfo.propTypes = {
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

export default HouseholdMemberInfo;
