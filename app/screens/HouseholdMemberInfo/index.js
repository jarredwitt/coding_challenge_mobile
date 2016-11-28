import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { NavigationStyles } from '@exponent/ex-navigation';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { resetMember, saveMember, updateMemberProperty } from 'actions/member';

import HouseholdMemberInfo from './HouseholdMemberInfo';

class HouseholdMemberInfoContainer extends Component {
  static propTypes = {
    memberInfo: ImmutablePropTypes.map,
    navigator: PropTypes.object,
    resetMember: PropTypes.func,
    saveMember: PropTypes.func,
    updateMemberProperty: PropTypes.func,
  }

  static route = {
    styles: {
      ...NavigationStyles.SlideVertical,
    },
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.memberInfo !== this.props.memberInfo;
  }
  componentWillUnmount() {
    this.props.resetMember();
  }
  _back = () => this.props.navigator.pop();
  _submit = () => this.props.saveMember();
  render() {
    const { memberInfo, updateMemberProperty: updateProperty } = this.props;
    const { first, last, email, age, gender } = memberInfo.toJS();

    return (
      <HouseholdMemberInfo
        age={age}
        back={this._back}
        email={email}
        first={first}
        gender={gender}
        last={last}
        submit={this._submit}
        updateProperty={updateProperty}
      />
    );
  }
}

const mapStateToProps = state => ({
  memberInfo: state.member,
});

export default connect(mapStateToProps, { resetMember, saveMember, updateMemberProperty })(HouseholdMemberInfoContainer);
