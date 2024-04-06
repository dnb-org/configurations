# Babel

Create `.babelrc.js` with the following content:

```js
module.exports = {
  presets: ["module:@davidsneighbour/babel-config"],
};
```

or create `babel.config.json` with the following content:

```json
{
  "presets": ["module:@davidsneighbour/babel-config"]
}
```

We could also create a `babel` property inside of `package.json`:

```json
{
  "babel": {
    "presets": ["module:@davidsneighbour/babel-config"]
  }
}
```

To override settings of the preset use the `overrides` parameter:

```js
module.exports = {
  presets: ["module:@davidsneighbour/babel-config"],
  overrides: [
    {
      // override setup
    },
  ],
};
```

[More information about Babel configuration](https://babeljs.io/docs/en/options).

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
