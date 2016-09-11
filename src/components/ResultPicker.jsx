import React from 'react';

export default React.createClass({
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
