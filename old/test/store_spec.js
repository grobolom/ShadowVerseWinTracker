import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import {makeStore} from '../tracker/store.js';

describe('store', () => {

  it('is a Redux store configured with the correct reducer', () => {
    const store = makeStore();
    expect(store.getState()).to.equal(Map());

    store.dispatch({
      type: 'SELECT_HERO',
      leader: 'SWORDCRAFT',
    });
    expect(store.getState()).to.equal(fromJS({
      hero: 'SWORDCRAFT',
    }));
  });

});
