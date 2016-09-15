import {Map} from 'immutable';

export default (state = Map(), action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_RESULT':
      return setResult(state, action.result);
    case 'SELECT_HERO':
      return selectHero(state, action.leader);
    case 'SELECT_VILLAIN':
      return selectVillain(state, action.leader);
  }
  return state;
};

function setResult(state, result) {
  if (result === 'won' || result === 'lost' || result === 'd/c') {
    return state.set('result', result);
  }
  return state;
}

function selectHero(state, leader) {
  return state.set('hero', leader);
}

function selectVillain(state, leader) {
  return state.set('villain', leader);
}
