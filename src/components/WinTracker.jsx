import React from 'react';
import {ResultPickerComponent} from './ResultPicker';
import HeroPicker from './HeroPicker';

export default React.createClass({
  render: function() {
    return <div className='container'>
      <HeroPicker header={'Hero'}/>
      <HeroPicker header={'Villain'}/>
      <ResultPickerComponent />
    </div>
  }
});
