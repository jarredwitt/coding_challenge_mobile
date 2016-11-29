import React, { Component, PropTypes } from 'react';
import { Keyboard } from 'react-native';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { createSelector } from 'reselect';

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
    return nextProps.applicationInfo !== this.props.applicationInfo;
  }
  _back = () => this.props.navigator.pop();
  _submit = () => {
    Keyboard.dismiss();
    this.props.navigator.push(Router.getRoute('householdMembersScreen'));
  }
  render() {
    const { applicationInfo, updateApplicationProperty: updateProperty } = this.props;
    const { address, city, state, zip, numberOfBedrooms } = applicationInfo.toJS();

    return (
      <HouseholdInfo
        address={address}
        back={this._back}
        city={city}
        numberOfBedrooms={numberOfBedrooms}
        state={state}
        submit={this._submit}
        updateProperty={updateProperty}
        zip={zip}
      />
    );
  }
}

const applicationInfoSelector = createSelector(state => state.application.get('data'), (applicationData) => {
  const keys = ['address', 'city', 'number_of_bedrooms', 'state', 'zip'];
  return applicationData.filter((v, k) => keys.includes(k));
});

const mapStateToProps = state => ({
  applicationInfo: applicationInfoSelector(state),
});

export default connect(mapStateToProps, { updateApplicationProperty })(HouseholdInfoContainer);
