## @dnb-org/postcss-config

### Installation

Use npm to install this package as development dependency:

```shell
npm install --save-dev @dnb-org/postcss-config
```

### Configuration

Create `postcss.config.js` with the following content:

```js
const config = require("@dnb-org/postcss-config");
module.exports = config;
```

[More information about PostCSS configuration](https://github.com/postcss/postcss).

### Configuration rules in this package

To be written ...

### Note about using PostCSS in [GoHugo](https://gohugo.io)

GoHugo is weird, but great. To get PostCSS to work with GoHugo the `postcss-cli` package needs to be installed in the
project itself and is not handled through this configuration. Run the following to get PostCSS working in GoHugo:

```shell
npm install --save-dev postcss-cli
```

A global `postcss-cli` installation won't work if the plugins in this package are not installed globally as well.

<!--- CONFIGURATIONS BEGIN --->

## DNB-Org/Configurations

A collection of configurations for website development at DNB Org.

<!-- prettier-ignore -->
| Package | Description |
| --- | ---- |
| [babel-config](https://github.com/dnb-org/configurations/tree/main/packages/babel-config) | [Babel](https://babeljs.io/) configuration |
| [bootstrap-config](https://github.com/dnb-org/configurations/tree/main/packages/bootstrap-config) | [Bootstrap](https://getbootstrap.com/) configuration |
| [browserslist-config](https://github.com/dnb-org/configurations/tree/main/packages/browserslist-config) | [Browserslist](https://github.com/browserslist/browserslist) configuration |
| [commitlint-config](https://github.com/dnb-org/configurations/tree/main/packages/commitlint-config) | [Commitlint](https://github.com/conventional-changelog/commitlint) configuration |
| [cssnano-config](https://github.com/dnb-org/configurations/tree/main/packages/cssnano-config) | [CSSnano](https://cssnano.co/) configuration |
| [cypress-config](https://github.com/dnb-org/configurations/tree/main/packages/cypress-config) | [Cypress](https://www.cypress.io/) configuration |
| [eslint-config](https://github.com/dnb-org/configurations/tree/main/packages/eslint-config) | [ESLint](https://github.com/eslint/eslint) configuration |
| [postcss-config](https://github.com/dnb-org/configurations/tree/main/packages/postcss-config) | [PostCSS](https://postcss.org/) configuration |
| [prettier-config](https://github.com/dnb-org/configurations/tree/main/packages/prettier-config) | [Prettier](https://prettier.io/) configuration |
| [remark-config](https://github.com/dnb-org/configurations/tree/main/packages/remark-config) | [ReMark](https://github.com/remarkjs/remark-lint) configuration |
| [standard-version-config](https://github.com/dnb-org/configurations/tree/main/packages/standard-version-config) | [Standard Version](https://github.com/conventional-changelog/standard-version) configuration |
| [stylelint-config](https://github.com/dnb-org/configurations/tree/main/packages/stylelint-config) | [StyleLint](https://github.com/stylelint/stylelint) configuration |
| [textlint-config](https://github.com/dnb-org/configurations/tree/main/packages/textlint-config) | [TextLint](https://github.com/textlint/textlint) configuration |
| [webpack-config](https://github.com/dnb-org/configurations/tree/main/packages/webpack-config) | [Webpack](https://webpack.js.org/) configuration |
| [tools](https://github.com/dnb-org/configurations/tree/main/packages/tools) | Tools |

<!--- CONFIGURATIONS END --->
