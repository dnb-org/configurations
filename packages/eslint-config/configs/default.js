
import globals from 'globals';
import stylisticJs from '@stylistic/eslint-plugin-js'

import fs from 'node:fs';

const path = './tsconfig.eslint.json';
let projectPath = '';
if (fs.existsSync(path)) {
  projectPath = path;
}

export default {
  name: 'dnb/default',
  files: ["**/!(*.*)"],
  ignores: [
    '**/node_modules/*',
    '**/vendor/*',
    '**/.git/*',
  ],
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
      project: projectPath, // keep in for now, this belongs to typescript setup
      extraFileExtensions: ['json'],
    },
  },
  linterOptions: {
    reportUnusedDisableDirectives: 'error',
  },
  // processor: {},
  plugins: {
    '@stylistic/js': stylisticJs
  },
  rules: {
    '@stylistic/js/indent': ['error', 2],
    'anti-trojan-source/no-bidi': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-var-requires': 'off',
    'import/no-unresolved': 'off',
  },
  // settings: {},
}
