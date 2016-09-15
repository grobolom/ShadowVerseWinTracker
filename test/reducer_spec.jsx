import {expect} from 'chai';
import reducer from '../src/reducer.js';
import {List, Map, fromJS} from 'immutable';

describe('root reducer', () => {
  it('should select a result', () => {
    const initialState = Map();
    const action = { 'type': 'SET_RESULT', 'result': 'won' };
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS({
      'result': 'won',
    }));
  });

  it('should set the state with an undefined initial state', () => {
    const action = { type: 'SET_RESULT', 'result': 'won' };
    const nextState = reducer(undefined, action);
    expect(nextState).to.equal(fromJS({
      'result': 'won',
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
  });

  it('should save a valid game result', () => {
    const initialState = Map({
      'hero': 'forestcraft',
      'villain': 'shadowcraft',
      'result': 'lost',
    });
    const action = { 'type': 'SAVE_RESULT' };
    const nextState = reducer(initialState, action);

    expect(nextState.get('games')).to.equal(fromJS([{
      'hero': 'forestcraft',
      'villain': 'shadowcraft',
      'result': 'lost',
    }]));
  });

  it('should reset the state partially after saving', () => {
    const initialState = Map({
      'hero': 'forestcraft',
      'villain': 'shadowcraft',
      'result': 'lost',
    });
    const action = { 'type': 'SAVE_RESULT' };
    const nextState = reducer(initialState, action);

    expect(nextState.get('hero')).to.equal('forestcraft');
    expect(nextState.get('villain')).to.equal(undefined);
    expect(nextState.get('result')).to.equal(undefined);
  });
});
