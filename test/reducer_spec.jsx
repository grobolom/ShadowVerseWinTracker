import {expect} from 'chai';
import reducer from '../src/reducer.js';
import {List, Map, fromJS} from 'immutable';

describe('root reducer', () => {
  it('should select a result', () => {
    const initialState = Map();
    const action = { 'type': 'SET_RESULT', 'result': 'Won' }
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS({
      'result': 'Won',
    }));
  });
});
