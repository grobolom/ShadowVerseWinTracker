import React from 'react';
import ReactDOM from 'react-dom';
import ResultPicker from './components/ResultPicker';

const selected = 'WON';

ReactDOM.render(
  <ResultPicker selected={selected}/>,
  document.getElementById('app')
);
