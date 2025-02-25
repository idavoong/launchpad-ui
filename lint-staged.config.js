module.exports = {
  '*.{ts,tsx,js}': ['eslint --fix', 'prettier --write'],
  '*.css': ['stylelint --fix', 'prettier --write'],
  '*.svg': ['prettier --write --parser html'],
};
