module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: '@react-native-community',
  rules: {
    curly: ['error', 'multi-line'],
    'linebreak-style': ['error', 'unix'],
    // 'linebreak-style': ['error', 'windows'],
    'no-shadow': 'off',

    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {varsIgnorePattern: '^_'}],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  globals: {
    JSX: true,
  },
};
