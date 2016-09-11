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

  it('should select a hero', () => {
    const initialState = Map();
    const action = { 'type': 'SELECT_HERO', 'leader': 'Forestcraft' }
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      'hero': 'Forestcraft',
    }))
  });

  it('should select a villain', () => {
    const initialState = Map();
    const action = { 'type': 'SELECT_VILLAIN', 'leader': 'Shadowcraft' }
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      'villain': 'Shadowcraft',
    }))
  })
});
