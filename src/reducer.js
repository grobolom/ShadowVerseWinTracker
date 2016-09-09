export default (state, action) => {
  switch (action.type) {
    case 'SET_RESULT':
      return setResult(state, action.result);
  }
  return state;
};

function setResult(state, result) {
  if (result === 'Won' || result === 'Lost' || result === 'D/C') {
    return state.set('result', result);
  }
  return state;
}
