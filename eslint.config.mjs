import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.js'],
    ignores: ['**/node_modules/**'],
    ...js.configs.recommended,
    plugins: {
      prettier: prettierPlugin
    },
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
        ...globals.browser
      }
    },
    rules: {
      'semi': ['error', 'always'],
      'indent': ['error', 2],
      'space-before-function-paren': ['error', 'always'],
      'space-before-blocks': 'error',
      'keyword-spacing': ['error', { 'before': true }],
      'quotes': ['error', 'single', {
        'avoidEscape': true,
        'allowTemplateLiterals': false
      }],
      'class-methods-use-this': 'off',
      'no-params-reassign': 'off',
      'camelcase': 'off',
      'no-unused-vars': ['error', {
        argsIgnorePattern: 'next'
      }],
      'prettier/prettier': 'error'
    }
  },
  prettier // <- isso aplica as regras do eslint-config-prettier corretamente
];
