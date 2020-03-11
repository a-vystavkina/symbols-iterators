import Bowman from '../js/Bowman';
import Team from '../js/Team';

test('Проверка Team add Bowman', () => {
  const bowman = new Bowman('Лучник', 'Bowman');
  const team = new Team();
  team.add(bowman);
  const received = team.toArray();
  const expected = [{
    name: 'Лучник',
    type: 'Bowman',
    health: 100,

    distanceAttack: 1,
    level: 1,
    attack: 25,
    defence: 25,
  }];

  expect(received).toEqual(expected);
});

test('Проверка Team addAll Bowman', () => {
  const bowman1 = new Bowman('Лучник', 'Bowman');
  const bowman2 = new Bowman('Лучник', 'Bowman');
  const team = new Team();
  team.addAll(bowman1, bowman2);
  const received = team.toArray();
  const expected = [{
    name: 'Лучник',
    type: 'Bowman',
    health: 100,

    distanceAttack: 1,
    level: 1,
    attack: 25,
    defence: 25,
  },
  {
    name: 'Лучник',
    type: 'Bowman',
    health: 100,

    distanceAttack: 1,
    level: 1,
    attack: 25,
    defence: 25,
  }];

  expect(received).toEqual(expected);
});

test('Проверка Team add Bowman повторно дубль', () => {
  const bowman = new Bowman('Лучник', 'Bowman');
  const team = new Team();
  team.add(bowman);

  expect(() => {
    team.add(bowman);
  }).toThrow();
});
