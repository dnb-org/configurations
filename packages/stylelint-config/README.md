[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)[![Codacy Badge](https://app.codacy.com/project/badge/Grade/52734e6cba244cf7b6286854b90f2a10)](https://www.codacy.com/gh/dnb-org/stylelint-config/dashboard)

## dnb-org / stylelint-config

[Stylelint](https://github.com/stylelint/stylelint) configuration used in [dnb-org](https://github.com/dnb-org) projects.

### Installation

```bash
npm install @dnb-org/stylelint-config --save-dev
```

### Configuration

Add the configuration to your repository (for instance in `.stylelintrc` or `.stylelintrc.json` or the `stylelint` parameter in package.json):

```json
{
  "extends": "@dnb-org/stylelint-config"
}
```

To change parts of the configuration use the `rules` parameter.

```json
{
  "extends": "@dnb-org/stylelint-config",
  "rules": {
    "max-nesting-depth": null
  }
}
```

Add scripts to your package.json:

```json
{
  "scripts": {
    "stylelint": "stylelint assets/scss/",
    "stylelint:fix": "stylelint assets/scss/ --fix",
    "stylelint:config": "stylelint --print-config index.js"
  }
}
```

Exchange the `assets/scss/` with your own styles folder.

### Usage

Run stylelint and show errors and warnings:

```shell
npm run stylelint
```

Run stylelint and fix automatically fixable issues:

```shell
npm run stylelint:fix
```

Print the current stylelint configuration:

```shell
npm run stylelint:config
```

### All configuration packages

| Package | Notes |
|---|---|
| [browserslist-config](https://github.com/dnb-org/browserslist-config) | [Browserslist](https://github.com/browserslist/browserslist) configuration used in [dnb-org](https://github.com/dnb-org) projects. |
| [commitlint-config](https://github.com/dnb-org/commitlint-config) | [Commitlint](https://github.com/conventional-changelog/commitlint) configuration used in [dnb-org](https://github.com/dnb-org) projects. |
| [eslint-config](https://github.com/dnb-org/eslint-config) | [ESLint](https://github.com/eslint/eslint) configuration used in [dnb-org](https://github.com/dnb-org) projects. |
| [remark-config](https://github.com/dnb-org/remark-config) | [Remark](https://github.com/remarkjs/remark-lint) configuration used in [dnb-org](https://github.com/dnb-org) projects. |
| [standard-version-config](https://github.com/dnb-org/standard-version-config) | [Standard Version](https://github.com/conventional-changelog/standard-version) configuration used in [dnb-org](https://github.com/dnb-org) projects. |
| [stylelint-config](https://github.com/dnb-org/stylelint-config) | [Stylelint](https://github.com/stylelint/stylelint) configuration used in [dnb-org](https://github.com/dnb-org) projects. |
| [textlint-config](https://github.com/dnb-org/textlint-config) | [Textlint](https://github.com/textlint/textlint) configuration used in [dnb-org](https://github.com/dnb-org) projects. |
