## @dnb-org/browserslist-config

[Browserslist](https://github.com/browserslist/browserslist) configuration for [dnb-org](https://github.com/dnb-org) projects.

### Installation

Use npm to install this package as development dependency:

```shell
npm install --save-dev @dnb-org/browserslist-config
```

### Configuration

Then add as extension to the `.browserslistrc`

```ini
extends @dnb-org/browserslist-config
```

Or in the `browserslist` parameter in `package.json`.

```json
{
  "browserslist": ["extends @dnb-org/browserslist-config"]
}
```

### Configuration rules in this package

- We support all presently updated browsers
- We don't support Internet Explorer lower than version 12
- We don't support legacy Edge Browser (lower than version 79)

### All dnb-org configuration packages

| Package | Notes |
| --- | --- |
| [all](https://github.com/dnb-org/configurations/tree/main/packages/all) | All configurations in one package |
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
| [tools](https://github.com/dnb-org/configurations/tree/main/packages/tools) | Tools |
