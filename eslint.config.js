/** @type {import('eslint').Linter.FlatConfig} */
const config = [
  {
    languageOptions: {
      globals: {

      },
      parserOptions: {
        ecmaVersion: 12,
      },
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'off',
    },
  },
  {
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
  },
];

module.exports = config;
