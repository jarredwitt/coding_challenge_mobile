import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { setVehicle } from 'actions/vehicle';
import { removeVehicle } from 'actions/vehicles';
import Router from 'Router';
import householdVehiclesSelector from 'selectors/householdVehicles';

import HouseholdVehicles from './HouseholdVehicles';

class HouseholdVehiclesContainer extends Component {
  static propTypes = {
    householdVehicles: ImmutablePropTypes.list,
    navigator: PropTypes.object,
    removeVehicle: PropTypes.func,
    setVehicle: PropTypes.func,
  }

  _addVehicle = () => this.props.navigator.push(Router.getRoute('householdVehicleInfoScreen'));
  _back = () => this.props.navigator.pop();
  _editVehicle = (index) => {
    const vehicle = this.props.householdVehicles.get(index);
    this.props.setVehicle(vehicle);
    this.props.navigator.push(Router.getRoute('householdVehicleInfoScreen', { vehicleIndex: index }));
  }
  _next = () => this.props.navigator.push(Router.getRoute('householdSummaryScreen'));
  _removeVehicle = (index) => {
    this.props.removeVehicle(index);
  }
  render() {
    const { householdVehicles } = this.props;
    const householdVehiclesList = householdVehicles.toJS();

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

const mapStateToProps = state => ({
  householdVehicles: householdVehiclesSelector(state),
});

export default connect(mapStateToProps, { removeVehicle, setVehicle })(HouseholdVehiclesContainer);
