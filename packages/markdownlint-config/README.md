Adds a configuration file for Markdownlint. Install markdownlint in VSCode as plugin.

Local configuration in `.markdownlint.json` or `markdownlint.jsonc`:

```jsonc
{
  "extends": "@davidsneighbour/markdownlint-config"
}
```

The filename, and -format can be any of the ones listed on the [markdownlint-cli2 configuration page](https://github.com/DavidAnson/markdownlint-cli2#configuration) but my advise is to keep with JSON or JSONC.

Add local overrides:

```jsonc
{
  "extends": "@davidsneighbour/markdownlint-config",
  "MD040": false
}
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
- [Tools](/packages/tools)
- [Webpack](/packages/webpack-config)
