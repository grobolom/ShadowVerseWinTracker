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

  describe('win matrix builder', () => {
    it('should create entries for all leaders', () => {
      const games = [];
      const matrix = getWinMatrix(games);
      expect(matrix.size).to.equal(7);
      // this is bad!!! magic numbers/figures
      expect(matrix.get('ha').size).to.equal(7);
    });

    it('should fill entries with their wins and losses', () => {
      const games = fromJS([
        { 'hero': 'ha', 'villain': 'fo', 'result': 'won' },
        { 'hero': 'ha', 'villain': 'fo', 'result': 'lost' },
        { 'hero': 'ha', 'villain': 'fo', 'result': 'won' },
      ]);
      const matrix = getWinMatrix(games);
      expect(matrix.get('ha').get('fo')).to.equal(fromJS([2, 1]));
    });
  });
});
