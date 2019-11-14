const { capitalize, reverse } = require('./functions');

it('should capitalize a string', () => {
  expect(capitalize('hello, world!')).toBe('Hello, world!');
  expect(capitalize('HELLO, WORLD!')).toBe('Hello, world!');
  expect(capitalize('hello, World!')).toBe('Hello, world!');
  expect(capitalize('¡hola, mundo!')).toBe('¡hola, mundo!');
});

it('should reverse a string', () => {
  expect(reverse('hello, world!')).toBe('!dlrow ,olleh');
  expect(reverse('Hello, World!')).toBe('!dlroW ,olleH');
  expect(reverse('')).toBe('');
});