[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)[![Codacy Badge](https://app.codacy.com/project/badge/Grade/4ee6197f4f9846dbbbdb20331660ac1c)](https://app.codacy.com/gh/dnb-org/browserslist-config/dashboard)

## dnb-org / browserslist-config

[Browserslist](https://github.com/browserslist/browserslist) configuration used in [dnb-org](https://github.com/dnb-org) projects.

### Usage

Install as dev-dependency:

```shell
npm install -D @dnb-org/browserslist-config
```

Then add as extension to the `.browserslistrc`

```ini
extends @dnb-org/browserslist-config
```

Or in the `browserslist` parameter in package.json.

```json
{
  "browserslist": ["extends @dnb-org/browserslist-config"]
}
```

### Philosophy

- We support all presently updated browsers
- We don't support Internet Explorer lower than version 12
- We don't support legacy Edge Browser (lower than version 79)

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
