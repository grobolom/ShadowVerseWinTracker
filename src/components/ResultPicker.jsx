import React from 'react';

export default React.createClass({
  getSelected: function() {
    return this.props.selected;
  },
  render: function() {
    return <div className="result-picker">
        <button>Won</button>
        <button>Lost</button>
        <button>D/C</button>
    </div>;
  }
});
