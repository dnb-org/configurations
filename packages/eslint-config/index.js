const fs = require('fs');
const path = './tsconfig.eslint.json';
let projectValue = '';
if (fs.existsSync(path)) {
  projectValue = path;
}

import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural'

export default [
  perfectionistNatural,
  {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      project: projectValue,
      extraFileExtensions: ['json'],
    },
    plugins: [
      '@typescript-eslint',
      'anti-trojan-source',
      'html',
      'no-loops',
      'sonarjs',
      // https://github.com/sindresorhus/eslint-plugin-unicorn
      "unicorn",
      "plugin:perfectionist/recommended-natural"
    ],
    ignorePatterns: [
      '**/node_modules/*',
      '**/vendor/*',
      '**/.git/*'
    ],
    settings: {
      'html/html-extensions': ['.html', '.htm'],
      'html/xml-extensions': ['.xml'],
      'html/indent': '0',
      'html/report-bad-indent': 'error',
    },
    // https://eslint.org/docs/user-guide/configuring/language-options
    env: {
      browser: true,
      es2022: true,
    },
    extends: [
      'airbnb-base',
      'plugin:compat/recommended',
      'plugin:markdown/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:sonarjs/recommended',
      "plugin:package-json/recommended",
    ],
    rules: {
      "indent": ["error", "tab"],
      'anti-trojan-source/no-bidi': 'error',
      'no-loops/no-loops': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/ban-ts-comment': 0,
      'import/no-unresolved': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
    overrides: [
      {
        files: ['**/*.md'],
        processor: 'markdown/markdown',
      },
      {
        // configuration for ```js fenced code blocks inside .md files.
        files: ['**/*.md/*.js'],
        rules: {
          'no-console': 'off',
          'import/no-unresolved': 'off',
        },
      },
    ],
  }];
