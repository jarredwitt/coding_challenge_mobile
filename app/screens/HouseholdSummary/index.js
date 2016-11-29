import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { saveApplicationAsDraft } from 'actions/application';

import householdInfoSelector from 'selectors/householdInfo';
import householdMembersSelector from 'selectors/householdMembers';
import householdVehiclesSelector from 'selectors/householdVehicles';

import HouseholdSummary from './HouseholdSummary';

class HouseholdSummaryContainer extends Component {
  static propTypes = {
    householdInfo: ImmutablePropTypes.map,
    householdMembers: ImmutablePropTypes.map,
    householdVehicles: ImmutablePropTypes.map,
    navigator: PropTypes.object,
    saveApplicationAsDraft: PropTypes.func,
  }

  _back = () => this.props.navigator.pop();
  _save = () => this.props.saveApplicationAsDraft();
  _submit = () => console.log('submit');
  render() {
    const { householdInfo, householdMembers, householdVehicles } = this.props;
    const householdMembersList = householdMembers.valueSeq().toJS();
    const householdVehiclesList = householdVehicles.valueSeq().toJS();

    return (
      <HouseholdSummary
        back={this._back}
        householdInfo={householdInfo.toJS()}
        householdMembers={householdMembersList}
        householdVehicles={householdVehiclesList}
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
});

export default connect(mapStateToProps, { saveApplicationAsDraft })(HouseholdSummaryContainer);
