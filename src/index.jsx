import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Tracker';

const hero = 'SHADOWCRAFT';
const villain = 'SWORDCRAFT';

ReactDOM.render(
  <Tracker hero={hero} villain={villain} />,
  document.getElementById('app')
);
