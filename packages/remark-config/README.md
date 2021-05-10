[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)[![Codacy Badge](https://app.codacy.com/project/badge/Grade/95b94ad281a049e292e8e62da1195e20)](https://www.codacy.com/gh/dnb-hugo/remark-config/dashboard)

## DNB-Hugo / remark-config

[Remark](https://github.com/remarkjs/remark-lint) configuration used in [dnb-hugo](https://github.com/dnb-hugo) projects.

### Notes

This configuration uses [remark-preset-lint-recommended](https://github.com/remarkjs/remark-lint/tree/main/packages/remark-preset-lint-recommended) with some additions on it's own.

You probably won't need this ;)

### Installation

```shell script
npm install -D dnb-hugo/remark-config
```

### Configuration

Put the following into `.remarkrc` in the root of your project. Remove the `write-good` line if you want to ensure the quality of text. It tends to be overzealous though, so it's deactivated by default.

```json
{
  "plugins": [
    "@dnb-hugo/remark-config",
    ["remark-lint-write-good", false]
  ]
}
```

### Remark Setup Rules

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
