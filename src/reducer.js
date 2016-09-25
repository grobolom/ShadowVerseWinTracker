import {Map, List, fromJS} from 'immutable';

const initialState = fromJS({
  'hero': undefined,
  'villain': undefined,
  'result': undefined,
  'games': [],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RESULT':
      return setResult(state, action.result);
    case 'SELECT_HERO':
      return selectHero(state, action.leader);
    case 'SELECT_VILLAIN':
      return selectVillain(state, action.leader);
    case 'SAVE_RESULT':
      return saveResults(state, action.hero, action.villain, action.result);
    case 'RESET_GAMES':
      return resetGames(state);
  }
  return state;
};

function setResult(state, result) {
  if (result === 'won' || result === 'lost') {
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

/*
function saveResults(state) {
  if (state.get('villain') == undefined ||
      state.get('villain') == '') {
    return state;
  }

  const game = Map({
    'hero': state.get('hero'),
    'villain': state.get('villain'),
    'result': state.get('result'),
  });
  return state.set('villain', undefined)
              .set('result', undefined)
              .update('games', List(), g => g.push(game))
}
*/

function saveResults(state, hero, villain, result) {
  if (villain == '' || villain == undefined) return state;

  const game = Map({
    hero,
    villain,
    result,
  });

  return state.set('villain', undefined)
              .set('result', undefined)
              .update('games', List(), g => g.push(game));
}

function resetGames(state) {
  return state.set('games', List());
}
