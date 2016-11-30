import React, { Component, PropTypes } from 'react';
import { Keyboard } from 'react-native';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { updateApplicationProperty } from 'actions/application';
import Router from 'Router';
import householdInfoSelector from 'selectors/householdInfo';

import HouseholdInfo from './HouseholdInfo';

class HouseholdInfoContainer extends Component {
  static propTypes = {
    householdInfo: ImmutablePropTypes.map,
    navigator: PropTypes.object,
    updateApplicationProperty: PropTypes.func,
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.householdInfo !== this.props.householdInfo;
  }
  _submit = () => {
    Keyboard.dismiss();
    this.props.navigator.push(Router.getRoute('householdMembersScreen'));
  }
  render() {
    const { householdInfo, updateApplicationProperty: updateProperty } = this.props;
    const { address, city, state, zip, numberOfBedrooms } = householdInfo.toJS();

    return (
      <HouseholdInfo
        address={address}
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

const mapStateToProps = state => ({
  householdInfo: householdInfoSelector(state),
});

export default connect(mapStateToProps, { updateApplicationProperty })(HouseholdInfoContainer);
