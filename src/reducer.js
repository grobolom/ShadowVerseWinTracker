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
    case 'UNDO':
      return undo(state);
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

function undo(state) {
  const lastGame = state.get('games').last();

  if (lastGame == undefined) {
    return state;
  }

  return state.set('hero', lastGame.get('hero'))
              .set('villain', lastGame.get('villain'))
              .set('result', lastGame.get('result'))
              .update('games', g => g.pop());
}
