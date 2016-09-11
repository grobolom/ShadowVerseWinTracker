import React from 'react';
import ResultPicker from './ResultPicker';
import HeroPicker from './HeroPicker';

export default React.createClass({
  render: function() {
    return <div className='container'>
      <HeroPicker header={'Hero'}/>
      <HeroPicker header={'Villain'}/>
      <ResultPicker
        setResult={this.props.setResult}
      />
    </div>
  }
});
