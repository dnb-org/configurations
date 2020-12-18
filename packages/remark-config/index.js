'use strict';

module.exports.plugins = [

  require('remark-preset-lint-styleguide'),
  require('remark-preset-lint-consistent'),
  require('remark-frontmatter'),
  [require('remark-lint-linebreak-style'), 'unix'],
  [require('remark-lint-first-heading-level'), 2],
  [require('remark-lint-maximum-line-length'), 1000],
  [require('remark-lint-write-good'), 'warn', {
    'passive': false,
    'whitelist': ['read-only']
  }],
  [require('remark-lint-no-file-name-irregular-characters'), '\\.a-zA-Z0-9-_'],

];
