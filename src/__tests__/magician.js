import Magician from '../magician';

test('Correct name', () => {
  const character = new Magician('Man');
  expect(character.attack).toBe(10);
  expect(character.defence).toBe(40);
  expect(character.type).toBe('Magician');
});

test.each([
  ['F', 'Wrong length name'],
  ['Too long name', 'Wrong length name'],
])('Testing wrong legth name', (name, expected) => {
  expect(() => new Magician(name)).toThrow(expected);
});
