import React from 'react';
import {ResultPickerComponent} from './ResultPicker';
import {HeroPickerComponent} from './HeroPicker';

export default React.createClass({
  render: function() {
    return <div className='container'>
      <HeroPickerComponent player={'Hero'}/>
      <HeroPickerComponent player={'Villain'}/>
      <ResultPickerComponent />
    </div>
  }
});
