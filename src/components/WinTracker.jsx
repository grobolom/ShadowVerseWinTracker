import React from 'react';
import {ResultPickerComponent} from './ResultPicker';
import HeroPicker from './HeroPicker';

export default React.createClass({
  render: function() {
    return <div className='container'>
      <HeroPicker player={'Hero'}/>
      <HeroPicker player={'Villain'}/>
      <ResultPickerComponent />
    </div>
  }
});
