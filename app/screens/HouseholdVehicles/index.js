import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { setVehicle } from 'actions/vehicle';
import { removeVehicle } from 'actions/vehicles';
import Router from 'Router';

import HouseholdVehicles from './HouseholdVehicles';

class HouseholdVehiclesContainer extends Component {
  static propTypes = {
    householdVehicles: ImmutablePropTypes.map,
    navigator: PropTypes.object,
    removeVehicle: PropTypes.func,
    setVehicle: PropTypes.func,
  }

  _addVehicle = () => this.props.navigator.push(Router.getRoute('householdVehicleInfoScreen'));
  _back = () => this.props.navigator.pop();
  _editVehicle = (id) => {
    const vehicle = this.props.householdVehicles.get(id);
    this.props.setVehicle(vehicle);
    this.props.navigator.push(Router.getRoute('householdVehicleInfoScreen'));
  }
  _next = () => this.props.navigator.push(Router.getRoute('householdVehiclesScreen'));
  _removeVehicle = (id) => {
    this.props.removeVehicle(id);
  }
  render() {
    const { householdVehicles } = this.props;
    const householdVehiclesList = householdVehicles.valueSeq().toJS();

    return (
      <HouseholdVehicles
        addVehicle={this._addVehicle}
        back={this._back}
        editVehicle={this._editVehicle}
        householdVehicles={householdVehiclesList}
        next={this._next}
        removeVehicle={this._removeVehicle}
      />
    );
  }
}

const householdMembersSelector = createSelector(
  state => state.members,
  members => members.filter(member => !member.get('removed'))
);

const householdVehiclesSelector = createSelector(
  state => state.vehicles,
  householdMembersSelector,
  (vehicles, householdMembers) => vehicles.filter(vehicle => !vehicle.get('removed')).map((vehicle) => {
    if (!vehicle.has('ownerId')) {
      return vehicle;
    }

    const ownerId = vehicle.get('ownerId');
    const ownerName = householdMembers.get(ownerId).get('first');
    console.log(ownerName);
    return vehicle.set('owner', ownerName);
  })
);

const mapStateToProps = state => ({
  householdVehicles: householdVehiclesSelector(state),
});

export default connect(mapStateToProps, { removeVehicle, setVehicle })(HouseholdVehiclesContainer);
