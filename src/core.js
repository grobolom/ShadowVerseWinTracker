import {Map} from 'immutable';

export function reduceResults(games) {
  return games.reduce((reduction, current) => {
    const key = current.get('hero') + ' - ' + current.get('villain');
    const result = current.get('result');
    return reduction.update(key, Map(), pair => {
      if (result === 'won') return pair.update('wins', 0, g => g += 1);
      if (result === 'lost') return pair.update('losses', 0, g => g += 1);
      if (result === 'd/c') return pair.update('d/cs', 0, g => g += 1);
    });
  }, Map());
};
