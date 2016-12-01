import React, { Component, PropTypes } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { setMember } from 'actions/member';
import { removeMember } from 'actions/members';
import Router from 'Router';
import householdMembersSelector from 'selectors/householdMembers';

import HouseholdMembers from './HouseholdMembers';

class HouseholdMembersContainer extends Component {
  static propTypes = {
    householdMembers: ImmutablePropTypes.list,
    navigator: PropTypes.object,
    removeMember: PropTypes.func,
    setMember: PropTypes.func,
  }

  _addMember = () => this.props.navigator.push(Router.getRoute('householdMemberInfoScreen'));
  _back = () => this.props.navigator.pop();
  _editMember = (index) => {
    const member = this.props.householdMembers.get(index);
    this.props.setMember(member);
    this.props.navigator.push(Router.getRoute('householdMemberInfoScreen', { memberIndex: index }));
  }
  _next = () => this._validate() && this.props.navigator.push(Router.getRoute('householdVehiclesScreen'));
  _removeMember = id => this.props.removeMember(id);
  _validate = () => {
    if (this.props.householdMembers.size === 0) {
      Alert.alert('Error!', 'Your household needs at least one member.');
      return false;
    }

    return true;
  }
  render() {
    const { householdMembers } = this.props;
    const householdMembersList = householdMembers.toJS();

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

const mapStateToProps = state => ({
  householdMembers: householdMembersSelector(state),
});

export default connect(mapStateToProps, { removeMember, setMember })(HouseholdMembersContainer);
