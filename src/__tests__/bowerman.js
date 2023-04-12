import Bowerman from '../bowerman';

test('Correct name', () => {
  const character = new Bowerman('Man');
  expect(character.attack).toBe(25);
  expect(character.defence).toBe(25);
  expect(character.type).toBe('Bowman');
});

test.each([
  ['F', 'Wrong length name'],
  ['Too long name', 'Wrong length name'],
])('Testing wrong legth name', (name, expected) => {
  expect(() => new Bowerman(name)).toThrow(expected);
});
