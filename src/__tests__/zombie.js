import Zombie from '../zombie';

test('Correct name', () => {
  const character = new Zombie('Man');
  expect(character.attack).toBe(40);
  expect(character.defence).toBe(10);
  expect(character.type).toBe('Zombie');
});

test.each([
  ['F', 'Wrong length name'],
  ['Too long name', 'Wrong length name'],
])('Testing wrong legth name', (name, expected) => {
  expect(() => new Zombie(name)).toThrow(expected);
});
