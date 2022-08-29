# Babel

Create `.babelrc.js` with the following content:

```js
module.exports = {
  presets: ["module:@davidsneighbour/config/babel"],
};
```

or create `babel.config.json` with the following content:

```json
{
  "presets": ["module:@davidsneighbour/config/babel"]
}
```

We could also create a `babel` property inside of `package.json`:

```json
{
  "babel": {
    "presets": ["module:@davidsneighbour/config/babel"]
  }
}
```

To override settings of the preset use the `overrides` parameter:

```js
module.exports = {
  presets: ["module:@davidsneighbour/config/babel"],
  overrides: [
    {
      // override setup
    },
  ],
};
```

[More information about Babel configuration](https://babeljs.io/docs/en/options).

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
