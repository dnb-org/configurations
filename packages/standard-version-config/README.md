[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)[![Codacy Badge](https://app.codacy.com/project/badge/Grade/69b0aa568b6546b7a9316f25e57df752)](https://www.codacy.com/gh/dnb-org/standard-version-config/dashboard)

## dnb-org / standard-version-config

[Standard Version](https://github.com/conventional-changelog/standard-version) configuration used in [dnb-org](https://github.com/dnb-org) projects.

### Installation

```shell
npm install -D @dnb-org/standard-version-config
```

### Configuration

Create a file `.versionrc.js` with the following contents:

```javascript
const defaultStandardVersion = require('@dnb-org/standard-version-config');
module.exports = defaultStandardVersion;
```

Add the following scripts to your package.json:

```json
{
  "scripts": {
    "release": "standard-version --release-as patch -a -t \"v\" && ./bin/release-hook-postrelease.sh",
    "release-next": "standard-version --release-as minor -a -t \"v\" && ./bin/release-hook-postrelease.sh",
    "release-major": "standard-version --release-as major -a -t \"v\" && ./bin/release-hook-postrelease.sh"
  }
}
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
