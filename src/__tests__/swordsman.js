import Swordsman from '../swordsman';

test('Correct name', () => {
  const character = new Swordsman('Man');
  expect(character.attack).toBe(40);
  expect(character.defence).toBe(10);
  expect(character.type).toBe('Swordsman');
});

test.each([
  ['F', 'Wrong length name'],
  ['Too long name', 'Wrong length name'],
])('Testing wrong legth name', (name, expected) => {
  expect(() => new Swordsman(name)).toThrow(expected);
});
