'use strict'

module.exports.plugins = [

  // the following rules are set in remark-preset-lint-recommended
  // require('remark-lint'),
  // require('remark-lint-final-newline'),
  // require('remark-lint-list-item-bullet-indent'),
  // [require('remark-lint-list-item-indent'), 'tab-size'],
  // require('remark-lint-no-auto-link-without-protocol'),
  // require('remark-lint-no-blockquote-without-marker'),
  // require('remark-lint-no-literal-urls'),
  // [require('remark-lint-ordered-list-marker-style'), '.'],
  // require('remark-lint-hard-break-spaces'),
  // require('remark-lint-no-duplicate-definitions'),
  // require('remark-lint-no-heading-content-indent'),
  // require('remark-lint-no-inline-padding'),
  // require('remark-lint-no-shortcut-reference-image'),
  // require('remark-lint-no-shortcut-reference-link'),
  // require('remark-lint-no-undefined-references'),
  // require('remark-lint-no-unused-definitions')

  require('remark-preset-lint-recommended'),
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
