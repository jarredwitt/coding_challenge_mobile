import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { NavigationStyles } from '@exponent/ex-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Button from 'components/Button';
import CircleButton from 'components/CircleButton';
import Container from 'components/Container';
import FormInput from 'components/FormInput';
import StyledText from 'components/StyledText';

const HouseholdMemberInfo = props => (
  <Container>
    <KeyboardAwareScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps keyboardDismissMode="on-drag">
      <CircleButton size={20} icon="close" containerStyle={styles.backButton} onPress={() => props.navigator.pop()} />
      <StyledText style={[styles.titleBase, styles.title]}>Household Vehicle.</StyledText>
      <StyledText style={[styles.titleBase, styles.subtitle]}>Tell us about this automobile.</StyledText>
      <View style={styles.form}>
        <FormInput label="Make" />
        <FormInput label="Model" />
        <FormInput label="Year" />
        <FormInput label="License plate" />
      </View>
      <Button label="Add" icon="plus" />
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
