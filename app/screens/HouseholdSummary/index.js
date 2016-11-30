import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { saveApplicationAsDraft, submitApplication } from 'actions/application';

import householdInfoSelector from 'selectors/householdInfo';
import householdMembersSelector from 'selectors/householdMembers';
import householdVehiclesSelector from 'selectors/householdVehicles';

import HouseholdSummary from './HouseholdSummary';

class HouseholdSummaryContainer extends Component {
  static propTypes = {
    householdInfo: ImmutablePropTypes.map,
    householdMembers: ImmutablePropTypes.list,
    householdVehicles: ImmutablePropTypes.list,
    isLoading: PropTypes.bool,
    navigator: PropTypes.object,
    saveApplicationAsDraft: PropTypes.func,
    submitApplication: PropTypes.func,
  }

  _back = () => this.props.navigator.pop();
  _save = () => this.props.saveApplicationAsDraft();
  _submit = () => this.props.submitApplication();
  render() {
    const { householdInfo, householdMembers, householdVehicles, isLoading } = this.props;
    const householdMembersList = householdMembers.toJS();
    const householdVehiclesList = householdVehicles.toJS();

    return (
      <HouseholdSummary
        back={this._back}
        householdInfo={householdInfo.toJS()}
        householdMembers={householdMembersList}
        householdVehicles={householdVehiclesList}
        isLoading={isLoading}
        save={this._save}
        submit={this._submit}
      />
    );
  }
}

const mapStateToProps = state => ({
  householdInfo: householdInfoSelector(state),
  householdMembers: householdMembersSelector(state),
  householdVehicles: householdVehiclesSelector(state),
  isLoading: state.application.get('loading'),
});

export default connect(mapStateToProps, { saveApplicationAsDraft, submitApplication })(HouseholdSummaryContainer);
