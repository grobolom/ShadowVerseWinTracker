import React from 'react';
import {connect} from 'react-redux';
import {List, Map, Range, fromJS} from 'immutable';

import * as actionCreators from '../action_creators';
import {getRecordColor, reduceResults} from '../core';
import {GridSquare} from './GridSquare'

const leaders = fromJS({
  'forestcraft': 1,
  'swordcraft': 2,
  'runecraft': 3,
  'dragoncraft': 4,
  'shadowcraft': 5,
  'bloodcraft': 6,
  'havencraft': 7,
});

export const WinGrid = React.createClass({
  getData: function() {
    return reduceResults(this.props.games).toList();
  },
  getX: function(leader) { return leaders.get(leader); },
  render: function() {
    return <div className='win-grid'>
      <svg height='500px' width='500px'>
        <g>
        {leaders.map((k, v) =>
          <text
            textAnchor='middle'
            x={ k * 50 + 25 }
            y={ 40 }
            key={ 'x' + v }
            >{ v.slice(0, 2) }</text>
        )}
        {leaders.map((k, v) =>
          <text
            textAnchor='middle'
            x={ 32 }
            y={ k * 50 + 31 }
            key={ 'y' + v }
            >{ v.slice(0, 2) }</text>
        )}
        {this.getData().map(v =>
          <GridSquare
            key={ v.get('hero') + v.get('villain') }
            hero={ v.get('hero') }
            villain={ v.get('villain') }
            wins={ v.get('wins', 0) }
            losses={ v.get('losses', 0) } />
        )}
        </g>
      </svg>
    </div>
  }
});

const mapStateToProps = function(state) {
  return {
    games: state.get('games')
  };
};

export const WinGridComponent = connect(
  mapStateToProps,
  actionCreators
)(WinGrid);
