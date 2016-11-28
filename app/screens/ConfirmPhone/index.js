import React, { Component, PropTypes } from 'react';

import Router from 'Router';

import ConfirmPhone from './ConfirmPhone';

class Container extends Component {
  static propTypes = {
    navigator: PropTypes.object,
  }

  state = {}

  _back = () => this.props.navigator.pop();
  _submit = () => {
    this.props.navigator.push(Router.getRoute('householdInfoScreen'));
  }
  _updateProperty = (name, value) => this.setState({ [name]: value });
  render() {
    return (
      <ConfirmPhone
        back={this._back}
        conformationCode={this.state.confirmationCode}
        updateConfirmationCode={this._updateProperty}
        submit={this._submit}
      />
    );
  }
}

export default Container;
