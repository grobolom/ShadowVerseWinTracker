import {expect} from 'chai';
import {reduceResults} from '../src/core.js';
import {List, Map, fromJS} from 'immutable';

describe('game reducer', () => {
  it('should calculate total wins for each leader pair', () => {
    const games = fromJS([
      { 'hero': 'a', 'villain': 'b', 'result': 'won' },
      { 'hero': 'a', 'villain': 'b', 'result': 'lost' },
      { 'hero': 'a', 'villain': 'b', 'result': 'won' },
      { 'hero': 'a', 'villain': 'c', 'result': 'won' },
      { 'hero': 'b', 'villain': 'c', 'result': 'lost' },
      { 'hero': 'c', 'villain': 'b', 'result': 'won' },
    ]);
    const reduced = reduceResults(games);
    expect(reduced).to.equal(fromJS({
      'a - b': 2,
      'a - c': 1,
      'c - b': 1,
    }));
  });
});
