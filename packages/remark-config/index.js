'use strict'

module.exports.plugins = [

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
