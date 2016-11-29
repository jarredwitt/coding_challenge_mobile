import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

import colors from 'constants/colors';
import StyledText from './StyledText';

class RadioButtons extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    options: PropTypes.array,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }

  static defaultProps = {
    onPress: () => true,
    options: [],
  }

  _buildOption = (option, index) => {
    const circleStyles = [styles.circle];
    if (this.props.value === option.value) {
      circleStyles.push(styles.circlFilled);
    }

    const onPress = () => this.props.onPress(option.value);

    return (
      <TouchableHighlight key={index} onPress={onPress} underlayColor="#0000">
        <View style={styles.optionContainer}>
          <View style={[circleStyles]} />
          <StyledText style={styles.text}>{option.display}</StyledText>
        </View>
      </TouchableHighlight>
    );
  }
  render() {
    const { options } = this.props;

    return (
      <View style={styles.container}>
        {options.map(this._buildOption)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    width: 30,
    height: 30,
    backgroundColor: colors.white,
    borderRadius: 15,
  },
  circlFilled: {
    backgroundColor: colors.yellow,
  },
  container: {
    marginVertical: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '500',
  },
});

export default RadioButtons;
