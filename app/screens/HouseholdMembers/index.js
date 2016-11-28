import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Router from 'Router';

import HouseholdMembers from './HouseholdMembers';

class HouseholdMembersContainer extends Component {
  static propTypes = {
    householdMembers: ImmutablePropTypes.map,
    navigator: PropTypes.object,
  }

  _addMember = () => this.props.navigator.push(Router.getRoute('householdMemberInfoScreen'));
  _back = () => this.props.navigator.pop();
  _next = () => this.props.navigator.push(Router.getRoute('householdVehiclesScreen'));
  render() {
    const { householdMembers } = this.props;
    const householdMembersList = householdMembers.valueSeq().toJS();

    return (
      <HouseholdMembers
        addMember={this._addMember}
        back={this._back}
        householdMembers={householdMembersList}
        next={this._next}
      />
    );
  }
}

const householdMembersSelector = createSelector(
  state => state.application.get('data'),
  state => state.members,
  (application, members) => members.filter(member => application.get('member_ids').includes(member.get('id')))
);

const mapStateToProps = state => ({
  householdMembers: householdMembersSelector(state),
});

export default connect(mapStateToProps)(HouseholdMembersContainer);
