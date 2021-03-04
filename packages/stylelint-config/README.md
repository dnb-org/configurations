[![Codacy Badge](https://app.codacy.com/project/badge/Grade/52734e6cba244cf7b6286854b90f2a10)](https://www.codacy.com/gh/dnb-hugo/stylelint-config/dashboard)

## Dnb-hugo / stylelint-config

Stylelint configuration used for all dnb-hugo projects.

### Installation

```bash
npm install @dnb-hugo/stylelint-config --save-dev
```

### Configuration

Add the configuration to your repository (for instance in `.stylelintrc` or `.stylelintrc.json`):

```json
{
  "extends": "@dnb-hugo/stylelint-config"
}
```

Add scripts to your package.json:

```json
{
  "scripts": {
    "stylelint": "stylelint assets/scss/",
    "stylelint-fix": "stylelint assets/scss/ --fix",
    "stylelint-config": "stylelint --print-config index.js"
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
npm run stylelint-fix
```

Print the current stylelint configuration:

```shell
npm run stylelint-config
```

### Development

- GitHub Repository: https://www.npmjs.com/package/@dnb-hugo/stylelint-config
- NPM Package: https://www.npmjs.com/package/@dnb-hugo/stylelint-config

### All configuration packages

| Package | Notes |
|---|---|
| [browserslist-config](https://github.com/dnb-hugo/browserslist-config) | [Browserslist](https://github.com/browserslist/browserslist) configuration used in [dnb-hugo](https://github.com/dnb-hugo) projects. |
| [commitlint-config](https://github.com/dnb-hugo/commitlint-config) | [Commitlint](https://github.com/conventional-changelog/commitlint) configuration used in [dnb-hugo](https://github.com/dnb-hugo) projects. |
| [eslint-config](https://github.com/dnb-hugo/eslint-config) | [ESLint](https://github.com/eslint/eslint) configuration used in [dnb-hugo](https://github.com/dnb-hugo) projects. |
| [remark-config](https://github.com/dnb-hugo/remark-config) | [Remark](https://github.com/remarkjs/remark-lint) configuration used in [dnb-hugo](https://github.com/dnb-hugo) projects. |
| [standard-version-config](https://github.com/dnb-hugo/standard-version-config) | [Standard Version](https://github.com/conventional-changelog/standard-version) configuration used in [dnb-hugo](https://github.com/dnb-hugo) projects. |
| [stylelint-config](https://github.com/dnb-hugo/stylelint-config) | [Stylelint](https://github.com/stylelint/stylelint) configuration used in [dnb-hugo](https://github.com/dnb-hugo) projects. |
| [textlint-config](https://github.com/dnb-hugo/textlint-config) | [Textlint](https://github.com/textlint/textlint) configuration used in [dnb-hugo](https://github.com/dnb-hugo) projects. |
