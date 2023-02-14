# Stylelint

Add the configuration to your repository (for instance in `.stylelintrc` or `.stylelintrc.json` or the `stylelint` parameter in package.json):

```json
{
  "extends": "@davidsneighbour/stylelint-config"
}
```

To change parts of the configuration use the `rules` parameter.

```json
{
  "extends": "@davidsneighbour/stylelint-config",
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

- [Babel](/packages/babel-config)
- [Bootstrap](/packages/bootstrap-config)
- [Browserslist](/packages/browserslist-config)
- [Commitlint](/packages/commitlint-config)
- [CssNano](/packages/cssnano-config)
- [Cypress](/packages/cypress-config)
- [ESLint](/packages/eslint-config)
- [Markdownlint](/packages/markdownlint-config)
- [PostCSS](/packages/postcss-config)
- [Prettier](/packages/prettier-config)
- [Remark Lint](/packages/remark-config)
- [Standard Version](/packages/standard-version-config)
- [Stylelint](/packages/stylelint-config)
- [Textlint](/packages/textlint-config)
- [Tools](/packages/tools)
- [Webpack](/packages/webpack-config)
