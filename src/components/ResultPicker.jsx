import React from 'react';

export default React.createClass({
  getButtons: function() { return ['Won','Lost','D/C']; },
  getSelected: function() { return this.props.selected; },
  isSelected: function(name, selected) {
    return (name === selected) ? "selected" : '';
  },
  render: function() {
    return <div className="result-picker">
      {this.getButtons().map(name =>
        <button
          className={this.isSelected(name, this.getSelected())}
          key={name} >
          {name}
        </button>
      )}
    </div>;
  }
});
