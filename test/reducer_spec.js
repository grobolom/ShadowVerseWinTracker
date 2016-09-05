import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

describe('reducers', () => {
  it('should select a hero', () => {
    const initialState = Map();
    const action = { name: 'SELECT_HERO', leader: 'SWORDCRAFT' };
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS({
      hero: 'SWORDCRAFT',
    }));
  });
});
