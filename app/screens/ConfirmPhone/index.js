import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { updateApplicationProperty } from 'actions/application';
import Router from 'Router';

import ConfirmPhone from './ConfirmPhone';

class ConfirmPhoneContainer extends Component {
  static propTypes = {
    confirmationCode: PropTypes.string,
    navigator: PropTypes.object,
    updateApplicationProperty: PropTypes.func,
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.confirmationCode !== this.props.confirmationCode;
  }
  _back = () => this.props.navigator.pop();
  _submit = () => {
    this.props.navigator.push(Router.getRoute('householdInfoScreen', { canPop: true }));
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

export default connect(mapStateToProps, { updateApplicationProperty })(ConfirmPhoneContainer);
