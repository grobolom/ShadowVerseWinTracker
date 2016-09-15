import React from 'react';
import {ResultPickerComponent} from './ResultPicker';
import {HeroPickerComponent} from './HeroPicker';
import {ActionBarComponent} from './ActionBar';

export default React.createClass({
  render: function() {
    return <div className='container'>
      <HeroPickerComponent player={'Hero'}/>
      <HeroPickerComponent player={'Villain'}/>
      <ResultPickerComponent />
      <ActionBarComponent />
    </div>
  }
});
