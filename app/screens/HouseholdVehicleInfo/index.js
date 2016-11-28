import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { NavigationStyles } from '@exponent/ex-navigation';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { resetVehicle, saveVehicle, updateVehicleProperty } from 'actions/vehicle';

import HouseholdVehicleInfo from './HouseholdVehicleInfo';

class HouseholdVehicleInfoContainer extends Component {
  static propTypes = {
    navigator: PropTypes.object,
    resetVehicle: PropTypes.func,
    saveVehicle: PropTypes.func,
    updateVehicleProperty: PropTypes.func,
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
  _submit = () => this.props.saveVehicle();
  render() {
    const { updateVehicleProperty: updateProperty, vehicleInfo } = this.props;
    const { make, model, year, license_plate } = vehicleInfo.toJS();

    return (
      <HouseholdVehicleInfo
        back={this._back}
        make={make}
        model={model}
        license_plate={license_plate}
        submit={this._submit}
        updateProperty={updateProperty}
        year={year}
      />
    );
  }
}

const mapStateToProps = state => ({
  vehicleInfo: state.vehicle,
});

export default connect(mapStateToProps, { resetVehicle, saveVehicle, updateVehicleProperty })(HouseholdVehicleInfoContainer);
