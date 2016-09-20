import React from 'react';
import {connect} from 'react-redux';
import {List, Map, Range} from 'immutable';

import * as actionCreators from '../action_creators';
import {getRecordColor, getWinMatrix} from '../core';

const leaders = [ 'fo', 'sw', 'ru', 'dr', 'sh', 'bl', 'ha', ];

export const WinGrid = React.createClass({
  getData: function() {
    return getWinMatrix(this.props.games);
  },
  render: function() {
    return <div className='win-grid'>
      <svg height='400px' width='400px'>
        <g>
        {leaders.map((v, k) =>
          <text
            textAnchor='middle'
            x={ k * 50 + 75 }
            y={ 40 }
            key={ 'x' + v }
            >{ v }</text>
        )}
        {leaders.map((v, k) =>
          <text
            textAnchor='middle'
            x={ 32 }
            y={ k * 50 + 81 }
            key={ 'y' + v }
            >{ v }</text>
        )}
        {this.getData().map((hero, x) => {
          hero.map((villain, y) => {
            <g key={ hero + '-' + villain }>
              <rect
                className='squares'
                width='50px'
                height='50px'
                x={ d.x * 50 + 50 }
                y={ d.y * 50 + 50 }
                style={{ fill: getRecordColor(d.get(record[0], d.record[1])) }}
                ></rect>
              <text
                textAnchor='middle'
                dx={ d.x * 50 + 73 }
                dy={ d.y * 50 + 90 }
                style={{
                  stroke: '#333333',
                  strokeWidth: 0.1,
                  fontSize: '1.3rem',
                  fontFamily: 'courier',
                }}
                >{ d.record[0] + '-' + d.record[1]}</text>
            </g>
          })
        })}
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
