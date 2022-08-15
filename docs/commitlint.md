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
