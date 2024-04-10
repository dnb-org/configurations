import fs from 'fs';
const path = './tsconfig.eslint.json';
let projectValue = '';
if (fs.existsSync(path)) {
  projectValue = path;
}

export default [
  {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      project: projectValue,
      extraFileExtensions: ['json'],
    },
    plugins: [
      'anti-trojan-source',
      'html',
      'no-loops',
      'sonarjs',
      // https://github.com/sindresorhus/eslint-plugin-unicorn
      "unicorn",
      "jsdoc"
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
      'plugin:sonarjs/recommended',
      'plugin:toml/standard',
      "plugin:jsdoc/recommended-error"
    ],
    rules: {
      "indent": ["error", "space"],
      'anti-trojan-source/no-bidi': 'error',
      'no-loops/no-loops': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/no-var-requires': 'off',
      'import/no-unresolved': 'off',

      //////////////////////////////////////////////
      // "jsdoc/check-access": 1, // Recommended
      // "jsdoc/check-alignment": 1, // Recommended
      // "jsdoc/check-examples": 1,
      // "jsdoc/check-indentation": 1,
      // "jsdoc/check-line-alignment": 1,
      // "jsdoc/check-param-names": 1, // Recommended
      // "jsdoc/check-property-names": 1, // Recommended
      // "jsdoc/check-syntax": 1,
      // "jsdoc/check-tag-names": 1, // Recommended
      // "jsdoc/check-types": 1, // Recommended
      // "jsdoc/check-values": 1, // Recommended
      // "jsdoc/empty-tags": 1, // Recommended
      // "jsdoc/implements-on-classes": 1, // Recommended
      // "jsdoc/informative-docs": 1,
      // "jsdoc/match-description": 1,
      // "jsdoc/multiline-blocks": 1, // Recommended
      // "jsdoc/no-bad-blocks": 1,
      // "jsdoc/no-blank-block-descriptions": 1,
      // "jsdoc/no-defaults": 1,
      // "jsdoc/no-missing-syntax": 1,
      // "jsdoc/no-multi-asterisks": 1, // Recommended
      // "jsdoc/no-restricted-syntax": 1,
      // "jsdoc/no-types": 1,
      // "jsdoc/no-undefined-types": 1, // Recommended
      // "jsdoc/require-asterisk-prefix": 1,
      // "jsdoc/require-description": 1,
      // "jsdoc/require-description-complete-sentence": 1,
      // "jsdoc/require-example": 1,
      // "jsdoc/require-file-overview": 1,
      // "jsdoc/require-hyphen-before-param-description": 1,
      // "jsdoc/require-jsdoc": 1, // Recommended
      // "jsdoc/require-param": 1, // Recommended
      // "jsdoc/require-param-description": 1, // Recommended
      // "jsdoc/require-param-name": 1, // Recommended
      // "jsdoc/require-param-type": 1, // Recommended
      // "jsdoc/require-property": 1, // Recommended
      // "jsdoc/require-property-description": 1, // Recommended
      // "jsdoc/require-property-name": 1, // Recommended
      // "jsdoc/require-property-type": 1, // Recommended
      // "jsdoc/require-returns": 1, // Recommended
      // "jsdoc/require-returns-check": 1, // Recommended
      // "jsdoc/require-returns-description": 1, // Recommended
      // "jsdoc/require-returns-type": 1, // Recommended
      // "jsdoc/require-throws": 1,
      // "jsdoc/require-yields": 1, // Recommended
      // "jsdoc/require-yields-check": 1, // Recommended
      // "jsdoc/sort-tags": 1,
      // "jsdoc/tag-lines": 1, // Recommended
      // "jsdoc/valid-types": 1 // Recommended
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
  }
];
