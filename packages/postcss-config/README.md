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

| Configurations | | |
| --- | --- | --- |
| **Build Tools** | | |
| [Babel](packages/babel-config) | [Webpack](packages/webpack-config) | |
| **Testing** | | |
| [Cypress](packages/cypress-config) | [HTML Validate](packages/htmlvalidate-config/) |  |
| **Linters and Formatters** | | |
| [Browserslist](packages/browserslist-config) | [ESLint](packages/eslint-config) | [PostCSS](packages/postcss-config) |
| [Prettier](packages/prettier-config) | [Stylelint](packages/stylelint-config) | |
| **Project Management** | | |
| [Commitlint](packages/commitlint-config) | [Release](packages/release-config) |  |
| **Markdown and Writing** | | |
| [Markdownlint](packages/markdownlint-config) | [Remark Lint](packages/remark-config) |  |
| **Other Tools** | | |
| [Bootstrap](packages/bootstrap-config) | [Tools](packages/tools) |  |
