import React, { Component, PropTypes } from 'react';

import Router from 'Router';

import PhoneEntry from './PhoneEntry';

class Container extends Component {
  static propTypes = {
    navigator: PropTypes.object,
  };

  state = {}

  _updateProperty = (name, value) => this.setState({ [name]: value });
  _submit = () => {
    this.props.navigator.push(Router.getRoute('confirmPhoneScreen'));
  }
  render() {
    return (
      <PhoneEntry
        phoneNumber={this.state.phoneNumber}
        updatePhoneNumber={this._updateProperty}
        submit={this._submit}
      />
    );
  }
}

export default Container;
