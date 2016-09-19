import React from 'react';
import {List, Map} from 'immutable';

const colors = {
  '90': '#009c1a',
  '75': '#22b600',
  '50': '#26cc00',
  '25': '#7be382',
  '10': '#d2f2d4',
  'na': '#000000',
}
const leaders = [ 'fo', 'sw', 'ru', 'dr', 'sh', 'bl', 'ha', ];
const data = [
  { 'x': '0', 'y': '0', 'percentage': '25', 'record': '1-3-0'},
  { 'x': '1', 'y': '0', 'percentage': '10', 'record': '1-9-0'},
  { 'x': '2', 'y': '0', 'percentage': '25', 'record': '1-3-0'},
  { 'x': '3', 'y': '0', 'percentage': '75', 'record': '3-1-0'},
  { 'x': '0', 'y': '1', 'percentage': '90', 'record': '9-0-3'},
  { 'x': '1', 'y': '1', 'percentage': '50', 'record': '3-3-2'},
  { 'x': '2', 'y': '1', 'percentage': '75', 'record': '4-1-0'},
  { 'x': '3', 'y': '1', 'percentage': '90', 'record': '5-1-2'},
  { 'x': '0', 'y': '2', 'percentage': '10', 'record': '3-1-0'},
  { 'x': '1', 'y': '2', 'percentage': '10', 'record': '1-7-0'},
  { 'x': '2', 'y': '2', 'percentage': '50', 'record': '3-4-2'},
  { 'x': '3', 'y': '2', 'percentage': '50', 'record': '7-8-0'},
  { 'x': '0', 'y': '3', 'percentage': '90', 'record': '6-1-0'},
  { 'x': '1', 'y': '3', 'percentage': '10', 'record': '2-1-1'},
  { 'x': '2', 'y': '3', 'percentage': '75', 'record': '6-2-0'},
  { 'x': '3', 'y': '3', 'percentage': '75', 'record': '7-3-3'},
];

export const WinGrid = React.createClass({
  render: function() {
    return <div className='win-grid'>
      <svg height='400px' width='400px'>
        <g>
        {leaders.map((v, k) =>
          <text
            textAnchor='middle'
            x={ k * 50 + 73 }
            y={ 40 }>{ v }</text>
        )}
        </g>
        {data.map(d =>
          <g>
            <rect
              className='squares'
              width='49px'
              height='49px'
              x={ d.x * 50 + 50 }
              y={ d.y * 50 + 50 }
              style={{ fill: colors[d.percentage] }}></rect>
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
              >{ d.record }</text>
          </g>
        )}
      </svg>
    </div>
  }
});
