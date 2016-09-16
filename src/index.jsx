import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './reducer';
import WinTracker from './components/WinTracker';

// hotmodule reloading fix
if (module.hot) {
  module.hot.accept();
}

require('./normalize.css');
require('./skeleton.css');
require('./style.css');

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <WinTracker />
  </Provider>,
  document.getElementById('app')
);
