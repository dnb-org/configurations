# PostCSS

Create `postcss.config.js` with the following content:

```js
const config = require("@davidsneighbour/config/postcss");
module.exports = config;
```

[More information about PostCSS configuration](https://github.com/postcss/postcss).

Note about using PostCSS in [GoHugo](https://gohugo.io)

GoHugo is weird, but great. To get PostCSS to work with GoHugo the `postcss-cli` package needs to be installed in the
project itself and is not handled through this configuration. Run the following to get PostCSS working in GoHugo:

```shell
npm install --save-dev postcss-cli
```

A global `postcss-cli` installation won't work if the plugins in this package are not installed globally as well.

## All configurations

* [Babel](/packages/babel-config)
* [Bootstrap](/packages/bootstrap-config)
* [Browserslist](/packages/browserslist-config)
* [Commitlint](/packages/commitlint-config)
* [CssNano](/packages/cssnano-config)
* [Cypress](/packages/cypress-config)
* [ESLint](/packages/eslint-config)
* [Markdownlint](/packages/markdownlint-config)
* [PostCSS](/packages/postcss-config)
* [Prettier](/packages/prettier-config)
* [Remark Lint](/packages/remark-config)
* [Standard Version](/packages/standard-version-config)
* [Stylelint](/packages/stylelint-config)
* [Tools](/packages/tools)
* [Webpack](/packages/webpack-config)
