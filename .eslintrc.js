// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-native', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    // Add any additional ESLint rules or overrides here
    'react-native/no-inline-styles': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
