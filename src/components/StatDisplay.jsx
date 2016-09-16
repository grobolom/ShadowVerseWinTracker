import React from 'react';
import {connect} from 'react-redux';
import {List, Map} from 'immutable';

import * as actionCreators from '../action_creators';
import {reduceResults} from '../core';

export const StatDisplay = React.createClass({
  getResults: function() {
    return this.props.games ? reduceResults(this.props.games) : Map({});
  },
  getResultString: function(result) {
    return result.get('wins', '0')
      + '-'
      + result.get('losses', '0')
      + '-'
      + result.get('d/cs', '0');
  },
  render: function() {
    return <div className="something">
      <ul>
      {this.getResults().entrySeq().map(result =>
        <li key={ result[0] }>{ result[0] } : { this.getResultString(result[1]) }</li>
      )}
      </ul>
    </div>;
  }
});

const mapStateToProps = function(state) {
  return {
    games: state.get('games')
  };
};

export const StatDisplayComponent = connect(
  mapStateToProps,
  actionCreators
)(StatDisplay);
