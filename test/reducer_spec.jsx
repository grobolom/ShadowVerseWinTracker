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
    const action = {
      'type': 'SAVE_RESULT',
      'hero': 'forestcraft',
      'villain': 'shadowcraft',
      'result': 'lost',
    };
    const nextState = reducer(initialState, action);

    expect(nextState.get('games')).to.equal(fromJS([{
      'hero': 'forestcraft',
      'villain': 'shadowcraft',
      'result': 'lost',
    }]));
  });

  it('should not save an invalid game result', () => {
    let initialState = Map({
      'hero': 'forestcraft',
      'villain': '',
      'result': 'lost',
      'games': List(),
    });
    const action = {
      'type': 'SAVE_RESULT',
      'hero': 'forestcraft',
      'villain': '',
      'result': 'lost',
      'games': List(),
    };
    let nextState = reducer(initialState, action);

    expect(nextState.get('games')).to.equal(fromJS([]));

    initialState = Map({
      'hero': 'forestcraft',
      'villain': undefined,
      'result': 'lost',
      'games': List(),
    });
    nextState = reducer(initialState, action);
    expect(nextState.get('games')).to.equal(fromJS([]));
  });

  it('should reset the state partially after saving', () => {
    const initialState = Map({
      'hero': 'forestcraft',
      'villain': 'shadowcraft',
      'result': 'lost',
    });
    const action = {
      'type': 'SAVE_RESULT',
      'hero': 'forestcraft',
      'villain': 'shadowcraft',
      'result': 'lost',
    };
    const nextState = reducer(initialState, action);

    expect(nextState.get('hero')).to.equal('forestcraft');
    expect(nextState.get('villain')).to.equal(undefined);
    expect(nextState.get('result')).to.equal(undefined);
  });

  it('should reset the tracked games for debugging', () => {
    const initialState = fromJS({
      'games': [
        { 'hero': 'some', 'villain': 'some', 'result': 'some' },
        { 'hero': 'other', 'villain': 'other', 'result': 'other' },
      ]
    });
    const action = { 'type': 'RESET_GAMES' };
    const nextState = reducer(initialState, action);

    expect(nextState.get('games')).to.equal(List());
 });

 it('should undo the last saved game', () => {
   const initialState = fromJS({
     'hero': 'wut',
     'villain': 'wut',
     'result': undefined,
     'games': [
       { 'hero': 'some', 'villain': 'some', 'result': 'some' },
       { 'hero': 'other', 'villain': 'other', 'result': 'other' },
     ]
   });
   const action = { 'type': 'UNDO' };
   const nextState = reducer(initialState, action);

   expect(nextState).to.equal(fromJS({
     'hero': 'other',
     'villain': 'other',
     'result': 'other',
     'games': [
       { 'hero': 'some', 'villain': 'some', 'result': 'some' },
     ]
   }));
 });
});
