import React from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../action_creators';

export const ActionBar = React.createClass({
  render: function() {
    return <div className='section row'>
      <button
        className='button'
        onClick={() => this.props.save(
          this.props.hero,
          this.props.villain,
          this.props.result
        )}
      >save</button>
      <button
        className='button'
        onClick={() => this.props.reset()}>&#8630;</button>
      <button className='button'>stats</button>
    </div>
  }
});

const mapStateToProps = function(state) {
  return {
    hero: state.get('hero'),
    villain: state.get('villain'),
    result: state.get('result'),
  };
};

export const ActionBarComponent = connect(
  mapStateToProps,
  actionCreators
)(ActionBar);
