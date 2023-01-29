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
