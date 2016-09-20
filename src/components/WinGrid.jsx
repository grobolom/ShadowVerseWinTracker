import React from 'react';
import {List, Map, Range} from 'immutable';

import {getRecordColor} from '../core';

const getRandomRecord = () => {
  const wins = Math.floor(Math.random() * 10)
  const losses = Math.floor(Math.random() * 10)
  return [wins, losses];
}

const leaders = [ 'fo', 'sw', 'ru', 'dr', 'sh', 'bl', 'ha', ];

const data = Range(0, 7).map( i => {
  return Range(0, 7).map( j => {
    return { 'x': i, 'y': j, 'record': getRandomRecord() };
  });
}).flatten().toJS();

console.log(data);

export const WinGrid = React.createClass({
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
        {data.map(d =>
          <g key={ d.x + '-' + d.y }>
            <rect
              className='squares'
              width='50px'
              height='50px'
              x={ d.x * 50 + 50 }
              y={ d.y * 50 + 50 }
              style={{ fill: getRecordColor(d.record[0], d.record[1]) }}
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
          )}
        )}
        </g>
      </svg>
    </div>
  }
});
