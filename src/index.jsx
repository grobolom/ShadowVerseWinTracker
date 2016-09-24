import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import {compose, createStore} from 'redux';
import {getStoredState, persistStore, autoRehydrate, createPersistor} from 'redux-persist-immutable';
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

const store = createStore(reducer, undefined, autoRehydrate());

class AppProvider extends Component {
  constructor() {
    super()
    this.state = { rehydrated: false }
  }

  componentWillMount() {
    persistStore(store, {}, () => {
      this.setState({ rehydrated: true })
    })
  }

  render() {
    if(!this.state.rehydrated){
      return <div>Loading...</div>
    }
    return (
      <Provider store={store}>
        <WinTracker />
      </Provider>
    )
  }
}

ReactDOM.render(
  <AppProvider />,
  document.getElementById('app')
);
