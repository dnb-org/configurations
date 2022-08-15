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
