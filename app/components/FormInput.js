import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import colors from 'constants/colors';
import StyledText from 'components/StyledText';

class FormInput extends Component {
  static propTypes = {

  }

  render() {
    const { inputStyle, label, labelHidden, labelStyle, onChangeText, ...inputProps } = this.props;

    return (
      <View style={styles.container}>
        {!labelHidden &&
          <StyledText style={[styles.label, labelStyle]}>
            {label}
          </StyledText>
        }
        <View style={styles.wrapper}>
          <TextInput style={[styles.input, inputStyle]} onChangeText={this._onChangeText} {...inputProps} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  input: {
    flex: 1,
    paddingLeft: 3,
    color: colors.white,
  },
  label: {
    fontSize: 14,
    marginBottom: 1,
    marginLeft: 1,
    fontWeight: '500',
  },
  wrapper: {
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
});

export default FormInput;
