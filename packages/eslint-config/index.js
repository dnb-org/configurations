module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:compat/recommended',
    'plugin:markdown/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:sonarjs/recommended',
  ],
  overrides: [
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
    },
    {
      // customize the configuration ESLint uses for ```js
      // fenced code blocks inside .md files.
      files: ['**/*.md/*.js'],
      rules: {
        'no-console': 'off',
        'import/no-unresolved': 'off',
      },
    },
  ],
  plugins: [
    'anti-trojan-source',
    '@typescript-eslint',
    'no-loops',
    'sonarjs',
    'html',
  ],
  ignorePatterns: ['**/node_modules/*', '**/vendor/*'],
  rules: {
    'anti-trojan-source/no-bidi': 'error',
    'no-loops/no-loops': 'error',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/ban-ts-comment': 0,
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
  settings: {
    'html/html-extensions': ['.html', '.htm'],
    'html/xml-extensions': ['.xml'],
    'html/indent': '0',
    'html/report-bad-indent': 'error',
  },
  env: {
    browser: true,
    es2022: true,
  },
};
