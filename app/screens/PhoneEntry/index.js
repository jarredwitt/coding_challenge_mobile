import React, { Component, PropTypes } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';

import { updateApplicationProperty } from 'actions/application';
import { validatePhoneNumber } from 'actions/phone';

import PhoneEntry from './PhoneEntry';

class PhoneEntryContainer extends Component {
  static propTypes = {
    phoneNumber: PropTypes.string,
    updateApplicationProperty: PropTypes.func,
    validatePhoneNumber: PropTypes.func,
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.phoneNumber !== this.props.phoneNumber;
  }
  _submit = () => this._validate() && this.props.validatePhoneNumber();
  _validate = () => {
    if (!this.props.phoneNumber) {
      Alert.alert('Error!', 'Phone number must be filled out.');
      return false;
    }

    return true;
  }
  render() {
    const { phoneNumber, updateApplicationProperty: updateProperty } = this.props;
    return (
      <PhoneEntry

        phoneNumber={phoneNumber}
        updatePhoneNumber={updateProperty}
        submit={this._submit}
      />
    );
  }
}

const mapStateToProps = state => ({
  phoneNumber: state.application.get('data').get('phoneNumber'),
});

export default connect(mapStateToProps, { updateApplicationProperty, validatePhoneNumber })(PhoneEntryContainer);
