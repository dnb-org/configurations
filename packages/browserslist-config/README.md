# Browserslist

## Configuration

Add as extension to the `.browserslistrc`

```ini
extends @davidsneighbour/browserslist-config
```

Or in the `browserslist` parameter in `package.json`.

```json
{
  "browserslist": ["extends @davidsneighbour/browserslist-config"]
}
```

## Configuration rules in this package

- We support all presently updated browsers.
- We don't support Internet Explorer.
- We don't support legacy Edge Browser (lower than version 79).
- We don't support Opera Mini and Mobile.

## All configurations

| Configurations | | |
| --- | --- | --- |
| **Build Tools** | | |
| [Babel](packages/babel-config) | [Webpack](packages/webpack-config) | |
| **Testing** | | |
| [Cypress](packages/cypress-config) | [HTML Validate](packages/htmlvalidate-config/) |  |
| **Linters and Formatters** | | |
| [Browserslist](packages/browserslist-config) | [CssNano](packages/cssnano-config) | [ESLint](packages/eslint-config) |
| [PostCSS](packages/postcss-config) | [Prettier](packages/prettier-config) | [Stylelint](packages/stylelint-config) |
| **Project Management** | | |
| [Commitlint](packages/commitlint-config) | [Release](packages/release-config) |  |
| **Markdown and Writing** | | |
| [Markdownlint](packages/markdownlint-config) | [Remark Lint](packages/remark-config) |  |
| **Other Tools** | | |
| [Bootstrap](packages/bootstrap-config) | [Tools](packages/tools) |  |
