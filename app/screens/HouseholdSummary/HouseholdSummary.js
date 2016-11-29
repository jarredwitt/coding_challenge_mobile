import React, { PropTypes } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import Button from 'components/Button';
import Container from 'components/Container';
import CircleButton from 'components/CircleButton';
import StyledText from 'components/StyledText';

const HouseholdInfo = (props) => {
  const { back, save, submit } = props;

  return (
    <Container>
      <ScrollView contentContainerStyle={styles.container}>
        <CircleButton size={20} containerStyle={styles.backButton} onPress={back} />
        <StyledText style={[styles.titleBase, styles.title]}>Household Info.</StyledText>
        <StyledText style={[styles.titleBase, styles.title]}>Household Members.</StyledText>
        <StyledText style={[styles.titleBase, styles.title]}>Household Vehicles.</StyledText>
        <Button label="Submit" onPress={submit} />
      </ScrollView>
    </Container>
  );
};

HouseholdInfo.propTypes = {
  back: PropTypes.func,
  save: PropTypes.func,
  submit: PropTypes.func,
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
