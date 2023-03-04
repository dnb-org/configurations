# Markdownlint

Adds a configuration file for Markdownlint.
Currently does not add markdownlint itself as package. Install it in VSCode as plugin.

Local configuration in `.markdownlint.json`:

```json
{
    "extends": "node_modules/@davidsneighbour/config/.markdownlint.json"
}
```

Add local overrides:

```json
{
  "extends": "node_modules/@davidsneighbour/config/.markdownlint.json",
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
