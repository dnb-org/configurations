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
