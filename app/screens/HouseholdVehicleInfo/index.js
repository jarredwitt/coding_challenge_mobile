import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { NavigationStyles } from '@exponent/ex-navigation';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { createSelector } from 'reselect';

import { resetVehicle, saveVehicle, updateVehicleProperty } from 'actions/vehicle';

import HouseholdVehicleInfo from './HouseholdVehicleInfo';

class HouseholdVehicleInfoContainer extends Component {
  static propTypes = {
    householdMembers: ImmutablePropTypes.list,
    navigator: PropTypes.object,
    resetVehicle: PropTypes.func,
    saveVehicle: PropTypes.func,
    updateVehicleProperty: PropTypes.func,
    vehicleIndex: PropTypes.number,
    vehicleInfo: ImmutablePropTypes.map,
  }

  static route = {
    styles: {
      ...NavigationStyles.SlideVertical,
    },
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.vehicleInfo !== this.props.vehicleInfo;
  }
  componentWillUnmount() {
    this.props.resetVehicle();
  }
  _back = () => this.props.navigator.pop();
  _setVehicleOwner = id => this.props.updateVehicleProperty('ownerId', id);
  _submit = () => this.props.saveVehicle(this.props.vehicleIndex);
  render() {
    const { householdMembers, updateVehicleProperty: updateProperty, vehicleInfo } = this.props;
    const { licensePlate, make, model, ownerId, year } = vehicleInfo.toJS();
    const householdMembersList = householdMembers.toJS().map(member => ({ display: member.first, value: member.id }));

    return (
      <HouseholdVehicleInfo
        back={this._back}
        householdMembers={householdMembersList}
        licensePlate={licensePlate}
        make={make}
        model={model}
        ownerId={ownerId}
        setVehicleOwner={this._setVehicleOwner}
        submit={this._submit}
        updateProperty={updateProperty}
        year={year}
      />
    );
  }
}

const householdMembersSelector = createSelector(
  state => state.members,
  members => members.filter(member => !member.get('removed'))
);

const mapStateToProps = state => ({
  householdMembers: householdMembersSelector(state),
  vehicleInfo: state.vehicle,
});

export default connect(mapStateToProps, { resetVehicle, saveVehicle, updateVehicleProperty })(HouseholdVehicleInfoContainer);
