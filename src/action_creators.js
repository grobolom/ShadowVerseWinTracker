export function setResult(result) {
  return {
    'type': 'SET_RESULT',
    result
  }
}

export function selectLeader(player, leader) {
  const type = (player === 'Hero') ? 'SELECT_HERO' : 'SELECT_VILLAIN';
  return {
    type,
    leader,
  };
}

export function save(hero, villain, result) {
  return {
    type: 'SAVE_RESULT',
    hero,
    villain,
    result,
  };
}

export function reset() {
  return { type: 'RESET_GAMES' };
}
