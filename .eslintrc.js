// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     jest: true,
//     node: true,
//   },
//   extends: ['eslint:recommended', 'plugin:prettier/recommended'],
//   globals: {
//     Atomics: 'readonly',
//     SharedArrayBuffer: 'readonly',
//   },
//   parser: '@babel/eslint-parser',
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
//   plugins: ['prettier'],
//   settings: {},
//   ignorePatterns: ['**.md'],
// };
module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: false,
      },
    ],
  },
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
};
