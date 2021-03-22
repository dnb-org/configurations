[![Codacy Badge](https://app.codacy.com/project/badge/Grade/4ee6197f4f9846dbbbdb20331660ac1c)](https://www.codacy.com/gh/dnb-hugo/browserslist-config/dashboard)

## DNB-Hugo / browserslist-config

[Browserslist](https://github.com/browserslist/browserslist) configuration used in [dnb-hugo](https://github.com/dnb-hugo) projects.

### Usage

Install as dev-dependency:

```shell
npm install -D @dnb-hugo/browserslist-config
```

Then add as extension to the `.browserslistrc`

```ini
extends @dnb-hugo/browserslist-config
```

or in the `browserslist` parameter in package.json.

```json
{
  "browserslist": ["extends @dnb-hugo/browserslist-config"]
}
```

### Philosophy

- we support all currently updated browsers
- we don't support Internet Explorer lower than version 12
- we don't support Legacy Edge Browser (lower than version 79)

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
