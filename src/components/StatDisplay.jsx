import React from 'react';
import {connect} from 'react-redux';
import {List} from 'immutable';

import * as actionCreators from '../action_creators';

export const StatDisplay = React.createClass({
  getResults: function() {
    return this.props.games ? this.props.games.reduce((reduction, current) => {
      return reduction.push(List([
        current.get('hero'),
        current.get('villain'),
        current.get('result'),
      ]));
    }, List()) : '';
  },
  render: function() {
    return <div className="something">
      <ul>
      {this.getResults().map(result =>
        <li>{ result }</li>
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
