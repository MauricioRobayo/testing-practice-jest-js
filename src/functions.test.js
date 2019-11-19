/* eslint-disable object-curly-newline */
const {
  capitalize,
  reverse,
  calculator,
  caesar,
  analyze,
} = require('./functions');

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

it('should encode correctly a string', () => {
  expect(caesar('Defend the East wall of the Castle 2', 1))
    .toBe('Efgfoe uif Fbtu xbmm pg uif Dbtumf 2');
  expect(caesar('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper dui ut ante tempor, tristique sodales massa molestie.', 7))
    .toBe('Svylt pwzbt kvsvy zpa htla, jvuzljalaby hkpwpzjpun lspa. Zbzwlukpzzl bsshtjvywly kbp ba hual altwvy, aypzapxbl zvkhslz thzzh tvslzapl.');
});

it('should analyze array', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]))
    .toEqual({ average: 4, min: 1, max: 8, length: 6 });
  expect(analyze([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))
    .toEqual({ average: 6, min: 1, max: 11, length: 11 });
  expect(analyze([]))
    .toEqual({ average: NaN, min: undefined, max: undefined, length: 0 });
});
