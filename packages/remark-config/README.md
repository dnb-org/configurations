## @dnb-org/remark-config

[Remark](https://github.com/remarkjs/remark-lint) configuration used in [dnb-org](https://github.com/dnb-org) projects.

### Installation

Use npm to install this package as development dependency:

```shell
npm install --save-dev @dnb-org/remark-config
```

### Configuration

Put the following into `.remarkrc` in the root of your project. Remove the `write-good` line if you want to ensure the quality of text. It tends to be overzealous though, so it's deactivated by default.

```json
{
  "plugins": [
    "@dnb-org/remark-config",
    ["remark-lint-write-good", false]
  ]
}
```

or in `.remarkrc.js`:

```js
const defaultRemarkConfig = require('@dnb-org/remark-config');
module.exports = defaultRemarkConfig;
```

or in `remarkConfig` in `package.json`:

```json
{
  "remarkConfig": {
    "plugins": [
      "@dnb-org/remark-config"
    ]
  }
}
```

### Configuration rules in this package

The `dnb-org` ruleset for `remark-lint` uses the following two presets:

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

### All dnb-org configuration packages

| Package | Notes |
| --- | --- |
| [all](https://github.com/dnb-org/configurations/tree/main/packages/all) | All configurations in one package |
| [babel-config](https://github.com/dnb-org/configurations/tree/main/packages/babel-config) | [Babel](https://babeljs.io/) configuration |
| [bootstrap-config](https://github.com/dnb-org/configurations/tree/main/packages/bootstrap-config) | [Bootstrap](https://getbootstrap.com/) configuration |
| [browserslist-config](https://github.com/dnb-org/configurations/tree/main/packages/browserslist-config) | [Browserslist](https://github.com/browserslist/browserslist) configuration |
| [commitlint-config](https://github.com/dnb-org/configurations/tree/main/packages/commitlint-config) | [Commitlint](https://github.com/conventional-changelog/commitlint) configuration |
| [cssnano-config](https://github.com/dnb-org/configurations/tree/main/packages/cssnano-config) | [CSSnano](https://cssnano.co/) configuration |
| [cypress-config](https://github.com/dnb-org/configurations/tree/main/packages/cypress-config) | [Cypress](https://www.cypress.io/) configuration |
| [eslint-config](https://github.com/dnb-org/configurations/tree/main/packages/eslint-config) | [ESLint](https://github.com/eslint/eslint) configuration |
| [postcss-config](https://github.com/dnb-org/configurations/tree/main/packages/postcss-config) | [PostCSS](https://postcss.org/) configuration |
| [prettier-config](https://github.com/dnb-org/configurations/tree/main/packages/prettier-config) | [Prettier](https://prettier.io/) configuration |
| [remark-config](https://github.com/dnb-org/configurations/tree/main/packages/remark-config) | [ReMark](https://github.com/remarkjs/remark-lint) configuration |
| [standard-version-config](https://github.com/dnb-org/configurations/tree/main/packages/standard-version-config) | [Standard Version](https://github.com/conventional-changelog/standard-version) configuration |
| [stylelint-config](https://github.com/dnb-org/configurations/tree/main/packages/stylelint-config) | [StyleLint](https://github.com/stylelint/stylelint) configuration |
| [textlint-config](https://github.com/dnb-org/configurations/tree/main/packages/textlint-config) | [TextLint](https://github.com/textlint/textlint) configuration |
| [tools](https://github.com/dnb-org/configurations/tree/main/packages/tools) | Tools |
