export default function reducer(state, action) {
  switch(action.type) {
    case 'SELECT_HERO':
      return selectHero(state, action.leader);
    case 'SELECT_VILLAIN':
      return selectVillain(state, action.leader);
    return state;
  }
}

function selectHero(state, leader) {
  return state.set('hero', leader);
}

function selectVillain(state, leader) {
  return state.set('villain', leader);
}
