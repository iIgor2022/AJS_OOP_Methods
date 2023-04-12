import Character from '../character';

test('Incorrect character type', () => {
  expect(() => new Character('Name', 'Elf', 0, 0, 0, 0)).toThrow('Type not allowed');
});

test('Testing levelUp method', () => {
  const character = new Character('Name', 'Bowman', 90, 1, 10, 10);
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.health).toBe(100);
  expect(character.level).toBe(2);
  expect(character.attack).toBeCloseTo(12);
  expect(character.defence).toBeCloseTo(12);
});

test('Testing levelUp method when character is dead', () => {
  const character = new Character('Name', 'Bowman', 0, 1, 10, 10);
  expect(() => character.levelUp()).toThrow('Character is dead');
});

test('Testing damage method', () => {
  const character = new Character('Name', 'Bowman', 90, 1, 10, 40);
  character.damage(5);
  expect(character.health).toBeCloseTo(87);
});

test('Testing damage method when character is dead', () => {
  const character = new Character('Name', 'Bowman', 0, 1, 10, 40);
  character.damage(5);
  expect(character.health).toBeCloseTo(0);
});
