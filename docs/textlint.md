# Textlint

Put the following into `.textlintrc.js` in the root of your project.

```js
const defaultTextlintConfig = require("@davidsneighbour/textlint-config");
module.exports = defaultTextlintConfig;
```

**OR** add a `--config` option to your npm-script:

in package.json:

```npm
"lint:textlint": "textlint --config @davidsneighbour/textlint-config .",
"lint:textlint:fix": "textlint --config @davidsneighbour/textlint-config --fix .",
"lint:textlint2": "textlint --config @davidsneighbour/textlint-config",
"lint:textlint2:fix": "textlint --config @davidsneighbour/textlint-config --fix",
```

To ignore files add a `.textlintignore`:

```ignore
LICENSE.md
CHANGELOG.md
```


# All configurations

- [Babel](/docs/babel.md)
- [Bootstrap](/docs/bootstrap.md)
- [Browserslist](/docs/browserslist.md)
- [Commitlint](/docs/commitlint.md)
- [CssNano](/docs/cssnano.md)
- [Cypress](/docs/cypress.md)
- [ESLint](/docs/eslint.md)
- [Markdownlint](/docs/markdownlint.md)
- [PostCSS](/docs/postcss.md)
- [Prettier](/docs/prettier.md)
- [Remark Lint](/docs/remark-lint.md)
- [Standard Version](/docs/standard-version.md)
- [Stylelint](/docs/stylelint.md)
- [Textlint](/docs/textlint.md)
- [Tools](/docs/tools.md)
- [Webpack](/docs/webpack.md)
