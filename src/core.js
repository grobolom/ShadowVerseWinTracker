import {List, Map, fromJS} from 'immutable';

export function reduceResults(games = List()) {
  return games.reduce((reduction, current) => {
    const key = current.get('hero') + ' - ' + current.get('villain');
    const result = current.get('result');
    return reduction.update(key, Map(), pair => {
      if (!pair.get('hero')) pair = pair.set('hero', current.get('hero'));
      if (!pair.get('villain')) pair = pair.set('villain', current.get('villain'));
      switch (result) {
        case 'won': return pair.update('wins', 0, g => g += 1);
        case 'lost': return pair.update('losses', 0, g => g += 1);
      };
    });
  }, Map());
};

export const colors = {
  '5': '#009c1a',
  '4': '#22b600',
  '3': '#26cc00',
  '2': '#7be382',
  '1': '#d2f2d4',
  'na': '#e1e1e1',
}

export const leaders = fromJS({
  'forestcraft': 1,
  'swordcraft': 2,
  'runecraft': 3,
  'dragoncraft': 4,
  'shadowcraft': 5,
  'bloodcraft': 6,
  'havencraft': 7,
});

export function getRecordColor(wins, losses) {
  const total = wins + losses;
  if (wins == 0) return colors['na']; // this covers total == 0 also
  if (losses == 0) return colors['5'];

  const rate = (100 * wins / total),
        remainder = rate % 20,
        winBucket = 1 + (rate - remainder) / 20;

  return colors[winBucket];
}
