## Usage

Create `.babelrc` with the following content:

```js
module.exports = {
  presets: [ "module:@dnb-hugo/babel-config" ]
}
```

To override settings use the `overrides` parameter:

```js
module.exports = {
  presets: [ "module:@dnb-hugo/babel-config" ],
  overrides: [
    {
      // override setup
    },
  ],
}
```
