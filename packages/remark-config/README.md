# Remark Lint

Put the following into `.remarkrc` in the root of your project. Remove the `write-good` line if you want to ensure the quality of text. It tends to be overzealous though, so it's deactivated by default.

```json
{
  "plugins": ["@davidsneighbour/remark-config", ["remark-lint-write-good", false]]
}
```

or in `.remarkrc.js`:

```js
const defaultRemarkConfig = require("@davidsneighbour/remark-config");
module.exports = defaultRemarkConfig;
```

or in `remarkConfig` in `package.json`:

```json
{
  "remarkConfig": {
    "plugins": ["@davidsneighbour/remark-config"]
  }
}
```

## Configuration rules in this package

The `davidsneighbour` ruleset for `remark-lint` uses the following two presets:

- [remark-preset-lint-styleguide](https://www.npmjs.com/package/remark-preset-lint-styleguide) - a preset to maintain good quality readable markdown files.
- [remark-preset-lint-consistent](https://www.npmjs.com/package/remark-preset-lint-consistent) - a preset that enforces consistency and helps avoiding common known pitfalls in markdown parsers (consistency rules may override the styleguide rules).

The following rules and plugins are added or changed:

- [remark-lint-first-heading-level](https://www.npmjs.com/package/remark-lint-first-heading-level) - sets the first heading level to h2, so that h1 can be used as page title after parsing
- [remark-frontmatter](https://github.com/remarkjs/remark-frontmatter) - support frontmatter in markdown files
- [remark-lint-linebreak-style](https://www.npmjs.com/package/remark-lint-linebreak-style) - sets the linebreak style to unix `\n` line endings
- [remark-lint-write-good](https://www.npmjs.com/package/remark-lint-write-good) - checks style of the writing via [write-good](https://github.com/btford/write-good) and can be disabled (see configuration above)
- [remark-lint-match-punctuation](https://github.com/laysent/remark-lint-plugins/tree/HEAD/packages/remark-lint-match-punctuation) to ensure programming punctuation comes in pairs.
- [remark-lint-no-repeat-punctuation](https://github.com/laysent/remark-lint-plugins/tree/HEAD/packages/remark-lint-no-repeat-punctuation) to ensure punktuation not doubled
- [remark-lint-emoji-limit](https://github.com/zerok/remark-lint-emoji-limit) - to make sure documents are not too emoji-y
- [remark-lint-no-empty-sections](https://github.com/vhf/remark-lint-no-empty-sections) - to ensure no empty sections are in the documents
- [remark-lint-heading-whitespace](https://github.com/vhf/remark-lint-heading-whitespace) - makes sure that no exotic whitespaces break parsing of headings

# All configurations

- [Babel](/davidsneighbour/configurations/tree/main/packages/babel-config)
- [Bootstrap](/davidsneighbour/configurations/tree/main/packages/bootstrap-config)
- [Browserslist](/davidsneighbour/configurations/tree/main/packages/browserslist-config)
- [Commitlint](/davidsneighbour/configurations/tree/main/packages/commitlint-config)
- [CssNano](/davidsneighbour/configurations/tree/main/packages/cssnano-config)
- [Cypress](/davidsneighbour/configurations/tree/main/packages/cypress-config)
- [ESLint](/davidsneighbour/configurations/tree/main/packages/eslint-config)
- [Markdownlint](/davidsneighbour/configurations/tree/main/packages/markdownlint-config)
- [PostCSS](/davidsneighbour/configurations/tree/main/packages/postcss-config)
- [Prettier](/davidsneighbour/configurations/tree/main/packages/prettier-config)
- [Remark Lint](/davidsneighbour/configurations/tree/main/packages/remark-config)
- [Standard Version](/davidsneighbour/configurations/tree/main/packages/standard-version-config)
- [Stylelint](/davidsneighbour/configurations/tree/main/packages/stylelint-config)
- [Textlint](/davidsneighbour/configurations/tree/main/packages/textlint-config)
- [Tools](/davidsneighbour/configurations/tree/main/packages/tools)
- [Webpack](/davidsneighbour/configurations/tree/main/packages/webpack-config)
