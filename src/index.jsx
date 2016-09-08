import React from 'react';
import ReactDOM from 'react-dom';
import Tracker from './components/Tracker';

const hero = 'SHADOWCRAFT';
const villain = 'SWORDCRAFT';
const pair = ['SHADOWCRAFT', 'BACONCRAFT']

ReactDOM.render(
  <Tracker hero={hero} villain={villain} pair={pair}/>,
  document.getElementById('app')
);
