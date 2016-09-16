import {Map} from 'immutable';

export function reduceResults(games) {
  return games.reduce((reduction, current) => {
    const key = current.get('hero') + ' - ' + current.get('villain');
    const result = current.get('result');
    return reduction.update(key, 0, wins => wins += (result === 'won' ? 1 : 0));
  }, Map());
};
