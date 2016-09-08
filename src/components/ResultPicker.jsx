import React from 'react';

export default React.createClass({
  getButtons: function() { return ['Won','Lost','D/C']; },
  render: function() {
    return <div className="result-picker">
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
