import React from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../action_creators';

export const ActionBar = React.createClass({
  render: function() {
    return <div className='section row'>
      <button
        className='button'
        onClick={() => this.props.undo()}>&#8630;</button>
      <button className='button'>stats</button>
    </div>
  }
});

const mapStateToProps = function(state) {
  return { };
};

export const ActionBarComponent = connect(
  mapStateToProps,
  actionCreators
)(ActionBar);
