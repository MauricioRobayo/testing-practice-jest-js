module.exports = {
  capitalize(text) {
    return text[0].toUpperCase() + text.substring(1).toLowerCase();
  },
  reverse(text) {
    return [...text].reverse().join('');
  },
  calculator: {
    add(a, b) { return +a + +b; },
    subtract(a, b) { return +a - +b; },
    divide(a, b) { return +a / +b; },
    multiply(a, b) { return +a * +b; },
  },
};
