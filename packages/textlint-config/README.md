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
