import React from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../action_creators';

export const HeroPicker = React.createClass({
  getLeaders: function() {
    return [
      'forestcraft',
      'swordcraft',
      'runecraft',
      'dragoncraft',
      'shadowcraft',
      'bloodcraft',
      'havencraft',
    ]
  },
  getSelected: function(player, name) {
    if (player === 'Hero' && name == this.props.hero) {
      return 'button-primary selected ' + name;
    }

    if (player === 'Villain' && name == this.props.villain) {
      return 'button-primary selected ' + name;
    }

    return name;
  },
  render: function() {
    return <div className='section row'>
      <div className='four columns'>
        <button className=''>{this.props.player}</button>
      </div>
      <div className='eleven columns'>
      {this.getLeaders().map(name =>
        <button
          className={'leader ' + this.getSelected(this.props.player, name)}
          key={this.props.player + '_' + name}
          onClick={() => {this.props.selectLeader(this.props.player, name)}}
        >&nbsp;</button>
      )}
      </div>
    </div>
  }
});

const mapStateToProps = function(state) {
  return {
    hero: state.get('hero'),
    villain: state.get('villain'),
  };
};

export const HeroPickerComponent = connect(
  mapStateToProps,
  actionCreators
)(HeroPicker);
