# Commitlint

## Rules

This configuration extends on [conventional-changelog/commitlint](https://github.com/conventional-changelog/commitlint) with the following changes:

- Types are of one of: content, docs, feat, fix, layouts, refactor, test, chore, wip
- Maximum line length is 100 characters

## Setup

In package.json add the following lines:

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
  extends: ["@davidsneighbour/config/commitlint"],
};
```

Lastly add a commit-msg hook to your git repository:

```bash
#!/bin/bash

npx --no-install commitlint --edit $1
```

## Usage

If you set up the git hook for commit messages you are good to go. Every time you add a commit it will check the message and complain if it's not right.

You can always manually check a commit with `npm run commitlint`.

If you wish to check a particular commit, you can do so by running `npm run commitlint -- $COMMITHASH`.

# All configurations

- [Babel](/davidsneighbour/configurations/tree/main/packages/babel-config)
- [Bootstrap](/davidsneighbour/configurations/tree/main/packages/bootstrap-config)
- [Browserslist](/davidsneighbour/configurations/tree/main/packages/browserslist-config)
- [Commitlint](/davidsneighbour/configurations/tree/main/packages/commitlint-config)
- [CssNano](/davidsneighbour/configurations/tree/main/packages/cssnano-config)
- [Cypress](/davidsneighbour/configurations/tree/main/packages/cypress-config)
- [ESLint](/davidsneighbour/configurations/tree/main/packages/eslint-config)
- [Markdownlint](/davidsneighbour/configurations/tree/main/packages/markdownlint-config)
- [PostCSS](/davidsneighbour/configurations/tree/main/packages/postcss-config)
- [Prettier](/davidsneighbour/configurations/tree/main/packages/prettier-config)
- [Remark Lint](/davidsneighbour/configurations/tree/main/packages/remark-config)
- [Standard Version](/davidsneighbour/configurations/tree/main/packages/standard-version-config)
- [Stylelint](/davidsneighbour/configurations/tree/main/packages/stylelint-config)
- [Textlint](/davidsneighbour/configurations/tree/main/packages/textlint-config)
- [Tools](/davidsneighbour/configurations/tree/main/packages/tools)
- [Webpack](/davidsneighbour/configurations/tree/main/packages/webpack-config)
