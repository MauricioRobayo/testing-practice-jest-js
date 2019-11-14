const { capitalize, reverse, calculator } = require('./functions');

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

it('should add two numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add('1', '2')).toBe(3);
});

it('should subtract two numbers', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
  expect(calculator.subtract('1', '2')).toBe(-1);
});

it('should multiply two numbers', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
  expect(calculator.multiply('1', '2')).toBe(2);
});

it('should divide two numbers', () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
  expect(calculator.divide('2', '1')).toBe(2);
  expect(calculator.divide(1, 0)).toBe(Infinity);
  expect(calculator.divide(0, 0)).toBe(NaN);
});