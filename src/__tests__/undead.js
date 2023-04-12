import Undead from '../undead';

test('Correct name', () => {
  const character = new Undead('Man');
  expect(character.attack).toBe(25);
  expect(character.defence).toBe(25);
  expect(character.type).toBe('Undead');
});

test.each([
  ['F', 'Wrong length name'],
  ['Too long name', 'Wrong length name'],
])('Testing wrong legth name', (name, expected) => {
  expect(() => new Undead(name)).toThrow(expected);
});
