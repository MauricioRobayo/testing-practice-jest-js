module.exports = {
  capitalize(text) {
    return text[0].toUpperCase() + text.substring(1).toLowerCase();
  },
  reverse(text) {
    return [...text].reverse().join('');
  }
};
