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
    inputStyle: TextInput.propTypes.style,
    label: PropTypes.string,
    labelHidden: PropTypes.bool,
    labelStyle: StyledText.propTypes.style,
    name: PropTypes.string,
    onChangeText: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    valueType: PropTypes.oneOf(['string', 'number']),
  }

  static defaultProps = {
    onChangeText: () => true,
    valueType: 'string',
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
  }
  _onChangeText = (text) => {
    if (this.props.valueType === 'number') {
      this.props.onChangeText(this.props.name, text * 1);
    } else {
      this.props.onChangeText(this.props.name, text);
    }
  };
  render() {
    let { inputStyle, label, labelHidden, labelStyle, onChangeText, value, valueType, ...inputProps } = this.props; // eslint-disable-line
    if (value && valueType === 'number') {
      value = value.toString();
    }

    return (
      <View style={styles.container}>
        {!labelHidden &&
          <StyledText style={[styles.label, labelStyle]}>
            {label}
          </StyledText>
        }
        <View style={styles.wrapper}>
          <TextInput style={[styles.input, inputStyle]} onChangeText={this._onChangeText} value={value} {...inputProps} />
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
