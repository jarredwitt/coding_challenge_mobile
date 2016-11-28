import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { setMember } from 'actions/member';
import { removeMember } from 'actions/members';
import Router from 'Router';

import HouseholdMembers from './HouseholdMembers';

class HouseholdMembersContainer extends Component {
  static propTypes = {
    householdMembers: ImmutablePropTypes.map,
    navigator: PropTypes.object,
    removeMember: PropTypes.func,
    setMember: PropTypes.func,
  }

  _addMember = () => this.props.navigator.push(Router.getRoute('householdMemberInfoScreen'));
  _back = () => this.props.navigator.pop();
  _editMember = (id) => {
    const member = this.props.householdMembers.get(id);
    this.props.setMember(member);
    this.props.navigator.push(Router.getRoute('householdMemberInfoScreen'));
  }
  _next = () => this.props.navigator.push(Router.getRoute('householdVehiclesScreen'));
  _removeMember = (id) => {
    this.props.removeMember(id);
  }
  render() {
    const { householdMembers } = this.props;
    const householdMembersList = householdMembers.valueSeq().toJS();

    return (
      <HouseholdMembers
        addMember={this._addMember}
        back={this._back}
        editMember={this._editMember}
        householdMembers={householdMembersList}
        next={this._next}
        removeMember={this._removeMember}
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
});

export default connect(mapStateToProps, { removeMember, setMember })(HouseholdMembersContainer);
