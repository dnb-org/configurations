# Stylelint

Add the configuration to your repository (for instance in `.stylelintrc` or `.stylelintrc.json` or the `stylelint` parameter in package.json):

```json
{
  "extends": "@davidsneighbour/config/stylelint"
}
```

To change parts of the configuration use the `rules` parameter.

```json
{
  "extends": "@davidsneighbour/config/stylelint",
  "rules": {
    "max-nesting-depth": null
  }
}
```

Add scripts to your package.json:

```json
{
  "scripts": {
    "lint:styles": "stylelint assets/scss/",
    "lint:styles:fix": "stylelint assets/scss/ --fix",
    "lint:styles:config": "stylelint --print-config index.js"
  }
}
```

Exchange the `assets/scss/` with your own styles folder.

## Usage

Run stylelint and show errors and warnings:

```shell
npm run stylelint
```

Run stylelint and fix automatically fixable issues:

```shell
npm run stylelint:fix
```

Print the current stylelint configuration:

```shell
npm run stylelint:config
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
