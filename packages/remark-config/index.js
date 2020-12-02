'use strict'

module.exports.plugins = [

  // https://developer.aliyun.com/mirror/npm/package/remark-preset-lint-styleguide
  // https://github.com/remarkjs/remark-lint/tree/main/packages/remark-preset-lint-consistent
  // the following rules are set in remark-preset-lint-consistent
  // [require('remark-lint-blockquote-indentation'), 'consistent'],
  // [require('remark-lint-checkbox-character-style'), 'consistent'],
  // [require('remark-lint-code-block-style'), 'consistent'],
  // [require('remark-lint-emphasis-marker'), 'consistent'],
  // [require('remark-lint-fenced-code-marker'), 'consistent'],
  // [require('remark-lint-heading-style'), 'consistent'],
  // [require('remark-lint-link-title-style'), 'consistent'],
  // require('remark-lint-list-item-content-indent'),
  // [require('remark-lint-ordered-list-marker-style'), 'consistent'],
  // [require('remark-lint-rule-style'), 'consistent'],
  // [require('remark-lint-strong-marker'), 'consistent'],
  // [require('remark-lint-table-cell-padding'), 'consistent']

  require('remark-preset-lint-styleguide/writability'),
  require('remark-preset-lint-consistent'),
  require('remark-frontmatter'),
  require('remark-lint-fenced-code-flag'),
  [require('remark-lint-final-newline'), true],
  [require('remark-lint-linebreak-style'), 'unix'],
  [require('remark-lint-first-heading-level'), 2],
  [require('remark-lint-no-html'), true],
  [require('remark-lint-maximum-line-length'), 1000],
  [
    require('remark-lint-no-file-name-irregular-characters'),
    "\\.a-zA-Z0-9-_"
  ],
  [require('remark-lint-write-good'), 'warn', {
     "passive": false,
     "whitelist": [ "read-only" ]
  }]

]
