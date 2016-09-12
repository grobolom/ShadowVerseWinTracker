export function setResult(result) {
  return {
    'type': 'SET_RESULT',
    result
  }
}

export function selectHero(leader) {
  return {
    'type': 'SELECT_HERO',
    leader
  }
}

export function selectVillain(leader) {
  return {
    'type': 'SELECT_VILLAIN',
    leader
  }
}
