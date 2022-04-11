# @davidsneighbour/browserslist-config

[Browserslist](https://github.com/browserslist/browserslist) configuration for [davidsneighbour](https://github.com/davidsneighbour) projects.

## Installation

Use npm to install this package as development dependency:

```shell
npm install --save-dev @davidsneighbour/browserslist-config
```

## Configuration

Then add as extension to the `.browserslistrc`

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
- We don't support Internet Explorer lower than version 12, see [#253](https://github.com/davidsneighbour/configurations/issues/253).
- We don't support legacy Edge Browser (lower than version 79).
- We don't support Opera Mini and Mobile.

<!--- CONFIGURATIONS BEGIN --->

## davidsneighbour/Configurations

A collection of configurations for project development at DNB Org.

<!-- prettier-ignore -->
| Package | Description |
| --- | ---- |
| [@davidsneighbour/babel-config](https://github.com/davidsneighbour/configurations/tree/main/packages/babel-config) | [Babel](https://babeljs.io/) configuration |
| [@davidsneighbour/bootstrap-config](https://github.com/davidsneighbour/configurations/tree/main/packages/bootstrap-config) | [Bootstrap](https://getbootstrap.com/) configuration |
| [@davidsneighbour/browserslist-config](https://github.com/davidsneighbour/configurations/tree/main/packages/browserslist-config) | [Browserslist](https://github.com/browserslist/browserslist) configuration |
| [@davidsneighbour/commitlint-config](https://github.com/davidsneighbour/configurations/tree/main/packages/commitlint-config) | [Commitlint](https://github.com/conventional-changelog/commitlint) configuration |
| [@davidsneighbour/cssnano-config](https://github.com/davidsneighbour/configurations/tree/main/packages/cssnano-config) | [CSSnano](https://cssnano.co/) configuration |
| [@davidsneighbour/cypress-config](https://github.com/davidsneighbour/configurations/tree/main/packages/cypress-config) | [Cypress](https://www.cypress.io/) configuration |
| [@davidsneighbour/eslint-config](https://github.com/davidsneighbour/configurations/tree/main/packages/eslint-config) | [ESLint](https://github.com/eslint/eslint) configuration |
| [@davidsneighbour/postcss-config](https://github.com/davidsneighbour/configurations/tree/main/packages/postcss-config) | [PostCSS](https://postcss.org/) configuration |
| [@davidsneighbour/prettier-config](https://github.com/davidsneighbour/configurations/tree/main/packages/prettier-config) | [Prettier](https://prettier.io/) configuration |
| [@davidsneighbour/remark-config](https://github.com/davidsneighbour/configurations/tree/main/packages/remark-config) | [ReMark](https://github.com/remarkjs/remark-lint) configuration |
| [@davidsneighbour/standard-version-config](https://github.com/davidsneighbour/configurations/tree/main/packages/standard-version-config) | [Standard Version](https://github.com/conventional-changelog/standard-version) configuration |
| [@davidsneighbour/stylelint-config](https://github.com/davidsneighbour/configurations/tree/main/packages/stylelint-config) | [StyleLint](https://github.com/stylelint/stylelint) configuration |
| [@davidsneighbour/textlint-config](https://github.com/davidsneighbour/configurations/tree/main/packages/textlint-config) | [TextLint](https://github.com/textlint/textlint) configuration |
| [@davidsneighbour/webpack-config](https://github.com/davidsneighbour/configurations/tree/main/packages/webpack-config) | [Webpack](https://webpack.js.org/) configuration |
| [@davidsneighbour/tools](https://github.com/davidsneighbour/configurations/tree/main/packages/tools) | Tools |

<!--- CONFIGURATIONS END --->
