import React from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../action_creators.js';

export const ResultPicker = React.createClass({
  getButtons: function() { return ['won','lost']; },
  render: function() {
    return <div className="result-picker">
      {this.getButtons().map(result =>
        <button
          className={result == this.props.selected ? 'selected button' : 'button'}
          key={result}
          onClick={() => { this.props.save(this.props.hero, this.props.villain, result); }}
          >
          {result}
        </button>
      )}
    </div>;
  }
});

const mapStateToProps = function(state) {
  return {
    hero: state.get('hero'),
    villain: state.get('villain'),
    selected: state.get('result'),
  };
};

export const ResultPickerComponent = connect(
  mapStateToProps,
  actionCreators
)(ResultPicker);
