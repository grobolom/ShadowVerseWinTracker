import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import {compose, createStore} from 'redux';
import {getStoredState, persistStore, autoRehydrate, createPresistor} from 'redux-persist-immutable';
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

const persistConfig = {}

getStoredState(persistConfig, (err, restoredState) => {
  console.log('bacon')
  const store = createStore(reducer, restoredState)
  const persistor = createPersistor(store, persistConfig)
})

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
    console.log(store.getState());
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
