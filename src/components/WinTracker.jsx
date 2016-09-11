import React from 'react';
import ResultPicker from './ResultPicker';

export default React.createClass({
  render: function() {
    return <div className='container'>
      <ResultPicker
        setResult={this.props.setResult}
      />
    </div>
  }
});
