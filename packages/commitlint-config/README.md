## @dnb-org/commitlint-config

[Commitlint](https://github.com/conventional-changelog/commitlint) configuration used in [dnb-org](https://github.com/dnb-org) projects.

### Installation

Use npm to install this package as development dependency:

```shell
npm install --save-dev @dnb-org/commitlint-config
```

### Configuration

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
| [remark-config](https://github.com/dnb-org/configurations/tree/main/packages/remark-config) | [ReMark](https://github.com/remarkjs/remark-lint) configuration |
| [standard-version-config](https://github.com/dnb-org/configurations/tree/main/packages/standard-version-config) | [Standard Version](https://github.com/conventional-changelog/standard-version) configuration |
| [stylelint-config](https://github.com/dnb-org/configurations/tree/main/packages/stylelint-config) | [StyleLint](https://github.com/stylelint/stylelint) configuration |
| [textlint-config](https://github.com/dnb-org/configurations/tree/main/packages/textlint-config) | [TextLint](https://github.com/textlint/textlint) configuration |
| [tools](https://github.com/dnb-org/configurations/tree/main/packages/tools) | Tools |
