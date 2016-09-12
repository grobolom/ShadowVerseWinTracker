import React from 'react';

export default React.createClass({
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
      <h1>{this.props.header}</h1>
      {this.getLeaders().map(name =>
        <button
          className='leader'
          key={this.props.header + '_' + name}>{name}</button>
      )}
    </div>
  }
});
