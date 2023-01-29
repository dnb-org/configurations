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
