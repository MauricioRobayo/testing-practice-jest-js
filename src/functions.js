const cipher = (regex, ofs, rotation, char) => {
  if (!char.match(regex)) return char;

  return String.fromCharCode(ofs + ((char.charCodeAt(0) - ofs + rotation) % 26));
};

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

  caesar(message, rotation = 13) {
    const lowerCipher = cipher.bind(null, /[a-z]/, 'a'.charCodeAt(0), rotation);
    const upperCipher = cipher.bind(null, /[A-Z]/, 'A'.charCodeAt(0), rotation);

    return message
      .split('')
      .map(ch => lowerCipher(upperCipher(ch)))
      .join('');
  },

  analyze(array) {
    return {
      average: array.reduce((a, b) => a + b, 0) / array.length,
      min: array.length ? Math.min(...array) : undefined,
      max: array.length ? Math.max(...array) : undefined,
      length: array.length,
    };
  },
};
