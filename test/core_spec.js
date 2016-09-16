import {expect} from 'chai';
import {reduceResults} from '../src/core.js';
import {List, Map, fromJS} from 'immutable';

describe('game reducer', () => {
  it('should calculate total wins for a leader pair', () => {
    const games = fromJS([
      { 'hero': 'a', 'villain': 'b', 'result': 'won' },
      { 'hero': 'a', 'villain': 'b', 'result': 'lost' },
      { 'hero': 'a', 'villain': 'b', 'result': 'won' },
    ]);
    const reduced = reduceResults(games);
    expect(reduced.get('a - b').get('wins')).to.equal(2);
  });

  it('should calculate disconnects for a leader pair', () => {
    const games = fromJS([
      { 'hero': 'a', 'villain': 'b', 'result': 'won' },
      { 'hero': 'a', 'villain': 'b', 'result': 'lost' },
      { 'hero': 'a', 'villain': 'b', 'result': 'd/c' },
    ]);
    const reduced = reduceResults(games);
    expect(reduced.get('a - b').get('d/cs')).to.equal(1);
  });
});
