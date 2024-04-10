// @ts-check

import fs from 'fs';
import eslintjs from '@eslint/js';
import globals from 'globals';
import markdown from 'eslint-plugin-markdown';

const path = './tsconfig.eslint.json';
let projectValue = '';
if (fs.existsSync(path)) {
  projectValue = path;
}

export default [
  eslintjs.configs.recommended,
  markdown.configs.recommended,
  {
    name: 'dnb/default',
    // files: '',
    // ignores: '',
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        //   var1: 'writable',
        //   var2: 'readonly'
      },
      parserOptions: {
        impliedStrict: true,
        project: projectValue, // keep in for now, this belongs to typescript setup
        extraFileExtensions: ['json'],
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    rules: {
      'indent': ['error', 'space'],
      'anti-trojan-source/no-bidi': 'error',
      'no-loops/no-loops': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/no-var-requires': 'off',
      'import/no-unresolved': 'off',
    },
    ignorePatterns: [
      '**/node_modules/*',
      '**/vendor/*',
      '**/.git/*',
    ],
  }
];
