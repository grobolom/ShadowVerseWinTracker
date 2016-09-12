import React from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../action_creators.js';

export const ResultPicker = React.createClass({
  getButtons: function() { return ['Won','Lost','DC']; },
  render: function() {
    return <div className="result-picker">
      <h1>{this.props.selected}</h1>
      {this.getButtons().map(name =>
        <button
          className={name == this.props.selected ? 'selected' : ''}
          key={name}
          onClick={() => { this.props.setResult(name); }}
          >
          {name}
        </button>
      )}
    </div>;
  }
});

const mapStateToProps = function(state) {
  return {
    selected: state.get('selected')
  };
};

export const ResultPickerComponent = connect(
  mapStateToProps,
  actionCreators
)(ResultPicker);
