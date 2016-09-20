import {List, Map, fromJS} from 'immutable';

export function reduceResults(games) {
  return games.reduce((reduction, current) => {
    const key = current.get('hero') + ' - ' + current.get('villain');
    const result = current.get('result');
    return reduction.update(key, Map(), pair => {
      switch (result) {
        case 'won': return pair.update('wins', 0, g => g += 1);
        case 'lost': return pair.update('losses', 0, g => g += 1);
        case 'd/c': return pair.update('d/cs', 0, g => g += 1);
      };
    });
  }, Map());
};

const colors = {
  '5': '#009c1a',
  '4': '#22b600',
  '3': '#26cc00',
  '2': '#7be382',
  '1': '#d2f2d4',
  'na': '#e1e1e1',
}

export function getRecordColor(wins, losses) {
  const total = wins + losses;
  if (wins == 0) return colors['na']; // this covers total == 0 also
  if (losses == 0) return colors['5'];

  const rate = (100 * wins / total),
        remainder = rate % 20,
        winBucket = 1 + (rate - remainder) / 20;

  return colors[winBucket];
}

const leaders = fromJS(['fo','sw','ru','sh','bl','dr','ha']);

function buildGrid(leaders) {
  return leaders.reduce(( reduction, value ) => {
    return reduction.set(value, leaders.reduce(( r, v ) => {
      return r.set(v, fromJS([0, 0]));
    }, Map()));
  }, Map());
}

export function getWinMatrix(games) {
  let grid = buildGrid(leaders);
  games.map(g => {
    grid = grid.updateIn([g.get('hero'), g.get('villain')], result => {
      console.log(g, result, g.get('result'));
      if (g.get('result') === 'won') return result.update(0, n => n + 1);
      if (g.get('result') === 'lost') return result.update(1, n => n + 1);
      return result;
    });
  });
  return grid;
}
