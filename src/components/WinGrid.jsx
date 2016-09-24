import React from 'react';
import {connect} from 'react-redux';
import {List, Map, Range, fromJS} from 'immutable';

import * as actionCreators from '../action_creators';
import {getRecordColor, reduceResults} from '../core';

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
          <g key={v.get('hero'), v.get('villain')}>
            <rect
              className='squares'
              width='50px'
              height='50px'
              x={ this.getX(v.get('hero')) * 50 }
              y={ this.getX(v.get('villain')) * 50 }
              style={{ fill: getRecordColor(v.get('wins', 0), v.get('losses', 0)) }}
              ></rect>
            <text
              textAnchor='middle'
              dx={ this.getX(v.get('hero')) * 50 + 23 }
              dy={ this.getX(v.get('villain')) * 50 + 40 }
              style={{
                stroke: '#333333',
                strokeWidth: 0.1,
                fontSize: '1.3rem',
                fontFamily: 'courier',
              }}
              >{ v.get('wins', 0) + '-' + v.get('losses', 0) }</text>
          </g>
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
