import React from 'react';
import ReactDOM from 'react-dom';
import WinTracker from './components/WinTracker';

if (module.hot) {
  module.hot.accept();
}

const selected = 'WON';

ReactDOM.render(
  <WinTracker />,
  document.getElementById('app')
);
