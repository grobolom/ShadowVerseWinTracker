import React from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../action_creators';

export const HeroPicker = React.createClass({
  getLeaders: function() {
    return [
      'Forestcraft',
      'Swordcraft',
      'Runecraft',
      'Dragoncraft',
      'Shadowcraft',
      'Bloodcraft',
      'Havencraft',
    ]
  },
  render: function() {
    return <div>
      <h1>{this.props.player}</h1>
      {this.getLeaders().map(name =>
        <button
          className='leader'
          key={this.props.player + '_' + name}
          onClick={() => {this.props.selectLeader(this.props.player, name)}}
        >
          {name}
        </button>
      )}
    </div>
  }
});

export const HeroPickerComponent = connect(
  undefined,
  actionCreators
)(HeroPicker);
