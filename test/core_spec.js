import {expect} from 'chai';
import {reduceResults, getRecordColor, getWinMatrix} from '../src/core.js';
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

  it('should save the hero and villain with the results', () => {
    const games = fromJS([
      { 'hero': 'a', 'villain': 'b', 'result': 'won' },
      { 'hero': 'a', 'villain': 'b', 'result': 'lost' },
      { 'hero': 'a', 'villain': 'b', 'result': 'd/c' },
    ]);
    const reduced = reduceResults(games);
    expect(reduced.get('a - b').get('hero')).to.equal('a');
    expect(reduced.get('a - b').get('villain')).to.equal('b');
  });
});

describe('record color calculator', () => {
  it('should return a color code', () => {
    const wins = 4;
    const losses = 4;
    const color = getRecordColor(wins, losses);
    expect(color).to.have.length(7);
    expect(color).to.match(/^#/);
  });

  it('should return a color for a really small losing record', () => {
    const wins = 1;
    const losses = 6;
    const color = getRecordColor(wins, losses);
    expect(color).to.have.length(7);
    expect(color).to.match(/^#/);
  });

  it('should return a color for a really high winning record', () => {
    const wins = 7;
    const losses = 1;
    const color = getRecordColor(wins, losses);
    expect(color).to.have.length(7);
    expect(color).to.match(/^#/);
  });

  it('should return a color for a record with no wins', () => {
    const wins = 0;
    const losses = 4;
    const color = getRecordColor(wins, losses);
    expect(color).to.have.length(7);
    expect(color).to.match(/^#/);
  });
});
