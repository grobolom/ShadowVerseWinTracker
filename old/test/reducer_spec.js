import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import {reducer} from '../tracker/reducer.js';

describe('reducer', () => {
  it('has an initial state', () => {
    const action = { type: 'SELECT_HERO', leader: 'SWORDCRAFT' };
    const nextState = reducer(undefined, action);
    expect(nextState).to.equal(fromJS({
      hero: 'SWORDCRAFT',
    }));
  });

  it('should select a hero', () => {
    const initialState = Map();
    const action = { type: 'SELECT_HERO', leader: 'SWORDCRAFT' };
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS({
      hero: 'SWORDCRAFT',
    }));
  });

  it('should select a villain', () => {
    const initialState = Map();
    const action = { type: 'SELECT_VILLAIN', leader: 'SHADOWCRAFT' };
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS({
      villain: 'SHADOWCRAFT',
    }));
  });

  it('should tally a win', () => {
    const initialState = Map();
    const action = { type: 'SET_RESULT', result: 'WIN' };
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS({
      result: 1,
    }));
  });

  it('should tally a loss', () => {
    const initialState = Map();
    const action = { type: 'SET_RESULT', result: 'LOSE' };
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS({
      result: 0,
    }));
  });
});
