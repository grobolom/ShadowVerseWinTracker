import {INITIAL_STATE} from './core.js';

export function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SELECT_HERO':
      return selectHero(state, action.leader);
    case 'SELECT_VILLAIN':
      return selectVillain(state, action.leader);
    case 'SET_RESULT':
      return setResult(state, action.result)
  }
  return state;
}

function selectHero(state, leader) {
  return state.set('hero', leader);
}

function selectVillain(state, leader) {
  return state.set('villain', leader);
}

function setResult(state, result) {
  switch(result) {
    case 'WIN':
      return state.set('result', 1);
    case 'LOSE':
      return state.set('result', 0)
  }
  return state;
}
