import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { updateApplicationProperty } from 'actions/application';
import Router from 'Router';

import HouseholdInfo from './HouseholdInfo';

class HouseholdInfoContainer extends Component {
  static propTypes = {
    applicationInfo: ImmutablePropTypes.map,
    navigator: PropTypes.object,
    updateApplicationProperty: PropTypes.func,
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.applicationInfo.get('data') !== this.props.applicationInfo.get('data');
  }
  _back = () => this.props.navigator.pop();
  _submit = () => {
    this.props.navigator.push(Router.getRoute('householdMembersScreen'));
  }
  render() {
    const { applicationInfo, updateApplicationProperty } = this.props;
    const { address, city, state, zip, number_of_bedrooms } = applicationInfo.get('data').toJS();

    return (
      <HouseholdInfo
        address={address}
        back={this._back}
        city={city}
        numberOfBedRooms={number_of_bedrooms}
        state={state}
        submit={this._submit}
        updateProperty={updateApplicationProperty}
        zip={zip}
      />
    );
  }
}

const mapStateToProps = state => ({
  applicationInfo: state.application,
});

export default connect(mapStateToProps, { updateApplicationProperty })(HouseholdInfoContainer);
