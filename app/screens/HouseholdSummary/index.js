import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import HouseholdSummary from './HouseholdSummary';

class HouseholdSummaryContainer extends Component {
  static propTypes = {
    navigator: PropTypes.object,
  }

  _back = () => this.props.navigator.pop();
  _save = () => console.log('save');
  _submit = () => console.log('submit');
  render() {
    return (
      <HouseholdSummary
        back={this._back}
        save={this._save}
        submit={this._submit}
      />
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(HouseholdSummaryContainer);
