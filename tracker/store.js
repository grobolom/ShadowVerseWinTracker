import {createStore} from 'redux';
import {reducer} from './reducer.js';

export function makeStore() {
  return createStore(reducer);
}
