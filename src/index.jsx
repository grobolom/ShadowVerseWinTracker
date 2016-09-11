import React from 'react';
import ReactDOM from 'react-dom';
import WinTracker from './components/WinTracker';

if (module.hot) {
  module.hot.accept();
}

require('./style.css');

const setResult = (selected) => {
  console.log(selected);
}

ReactDOM.render(
  <WinTracker setResult={setResult} />,
  document.getElementById('app')
);
