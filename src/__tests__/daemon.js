import Daemon from '../daemon';

test('Correct name', () => {
  const character = new Daemon('Man');
  expect(character.attack).toBe(10);
  expect(character.defence).toBe(40);
  expect(character.type).toBe('Daemon');
});

test.each([
  ['F', 'Wrong length name'],
  ['Too long name', 'Wrong length name'],
])('Testing wrong legth name', (name, expected) => {
  expect(() => new Daemon(name)).toThrow(expected);
});
