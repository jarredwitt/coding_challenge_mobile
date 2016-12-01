import React, { Component, PropTypes } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { NavigationStyles } from '@exponent/ex-navigation';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { resetMember, saveMember, updateMemberProperty } from 'actions/member';

import HouseholdMemberInfo from './HouseholdMemberInfo';

class HouseholdMemberInfoContainer extends Component {
  static propTypes = {
    memberIndex: PropTypes.number,
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
  _setGender = gender => this.props.updateMemberProperty('gender', gender);
  _submit = () => this._validate() && this.props.saveMember(this.props.memberIndex);
  _validate = () => {
    const fields = ['first', 'last', 'email', 'age', 'gender'];
    const memberInfo = this.props.memberInfo.toJS();
    const valid = fields.every(field => memberInfo[field]);

    if (!valid) {
      Alert.alert('Error!', 'Please make sure all fields are valid.');
      return false;
    }

    return valid;
  }
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
        setGender={this._setGender}
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
