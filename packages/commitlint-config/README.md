[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)[![Codacy Badge](https://app.codacy.com/project/badge/Grade/bf83f5c0292946ac84d8272e8bbdfca6)](https://www.codacy.com/gh/dnb-org/commitlint-config/dashboard)

## dnb-org / commitlint-config

[Commitlint](https://github.com/conventional-changelog/commitlint) configuration used in [dnb-org](https://github.com/dnb-org) projects.

### Rules

This configuration extends on [conventional-changelog/commitlint](https://github.com/conventional-changelog/commitlint) with the following changes:

- Types are of one of: content, docs, feat, fix, layouts, refactor, test, chore, wip
- Maximum line length is 100 characters

### Setup

```shell
npm install --save-dev @dnb-org/commitlint-config
```

Then in package.json add the following lines:

```json
{
  "scripts": {
    "commitlint": "commitlint --from=HEAD~1"
  }
}
```

Then add .commitlintrc.js with the following content:

```js
module.exports = {
  "extends": [
    "@dnb-org/commitlint-config"
  ]
};
```

Lastly add a commit-msg hook to your git repository:

```
#!/bin/bash

npx --no-install commitlint --edit $1
```

### Usage

If you set up the git hook for commit messages you are good to go. Every time you add a commit it will check the message and complain if it's not right.

You can always manually check a commit with `npm run commitlint`.

If you wish to check a particular commit, you can do so by running ` npm run commitlint -- $COMMITHASH`.

### Rules

... to be written ...

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
