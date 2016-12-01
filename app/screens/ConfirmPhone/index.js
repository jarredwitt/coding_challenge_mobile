import React, { Component, PropTypes } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';

import { updateApplicationProperty } from 'actions/application';
import { confirmPhoneNumber } from 'actions/phone';

import ConfirmPhone from './ConfirmPhone';

class ConfirmPhoneContainer extends Component {
  static propTypes = {
    confirmationCode: PropTypes.string,
    confirmPhoneNumber: PropTypes.func,
    navigator: PropTypes.object,
    updateApplicationProperty: PropTypes.func,
  }

  componentWillMount() {
    Alert.alert('Confirmation Code', 'Normally you would get a text for this, but this is a demo! The confirmation code is 8585');
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.confirmationCode !== this.props.confirmationCode;
  }
  _back = () => this.props.navigator.pop();
  _submit = () => this._validate() && this.props.confirmPhoneNumber();
  _validate = () => {
    if (!this.props.confirmationCode) {
      Alert.alert('Error!', 'Confirmation code must be filled out.');
      return false;
    }

    return true;
  }
  render() {
    const { confirmationCode, updateApplicationProperty: updateProperty } = this.props;

    return (
      <ConfirmPhone
        back={this._back}
        conformationCode={confirmationCode}
        updateConfirmationCode={updateProperty}
        submit={this._submit}
      />
    );
  }
}

const mapStateToProps = state => ({
  confirmationCode: state.application.get('data').get('confirmationCode'),
});

export default connect(mapStateToProps, { confirmPhoneNumber, updateApplicationProperty })(ConfirmPhoneContainer);
