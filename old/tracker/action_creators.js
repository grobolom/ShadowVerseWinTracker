export function selectHero(leader) {
  return { type: 'SELECT_HERO', leader: leader };
}

export function selectVillain(leader) {
  return { type: 'SELECT_VILLAIN', leader: leader };
}

export function setResult(result) {
  return { type: 'SET_RESULT', result: result };
}
