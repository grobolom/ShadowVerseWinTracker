import React from 'react';
import {fromJS} from 'immutable';

import {getRecordColor} from '../core';

const leaders = fromJS({
  'forestcraft': 1,
  'swordcraft': 2,
  'runecraft': 3,
  'dragoncraft': 4,
  'shadowcraft': 5,
  'bloodcraft': 6,
  'havencraft': 7,
});

export const GridSquare = React.createClass({
  getKey: function() { return this.props.hero + '-' + this.props.villain },
  getRecord: function() { return this.props.wins + '-' + this.props.losses },
  getRecordColor: function() { return getRecordColor(this.props.wins, this.props.losses) },
  getX: function() { return leaders.get(this.props.hero) },
  getY: function() { return leaders.get(this.props.villain) },
  render: function() {
    return <g >
      <rect
        className='squares'
        width='50px'
        height='50px'
        x={ this.getX() * 50 }
        y={ this.getY() * 50 }
        style={{ fill: this.getRecordColor() }}
        ></rect>
      <text
        textAnchor='middle'
        dx={ this.getX() * 50 + 23 }
        dy={ this.getY() * 50 + 40 }
        style={{
          stroke: '#333333',
          strokeWidth: 0.1,
          fontSize: '1.3rem',
          fontFamily: 'courier',
        }}
        >{ this.getRecord() }</text>
    </g>
  }
});
