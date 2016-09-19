import React from 'react';
import {ResultPickerComponent} from './ResultPicker';
import {HeroPickerComponent} from './HeroPicker';
import {ActionBarComponent} from './ActionBar';
import {StatDisplayComponent} from './StatDisplay';
import {WinGrid} from './WinGrid';

export default React.createClass({
  render: function() {
    return <div className='container'>
      <HeroPickerComponent player={'Hero'}/>
      <HeroPickerComponent player={'Villain'}/>
      <ResultPickerComponent />
      <ActionBarComponent />
      <WinGrid />
    </div>
  }
});
