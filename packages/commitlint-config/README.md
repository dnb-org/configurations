[Commitlint](https://github.com/conventional-changelog/commitlint) configuration used in [dnb-hugo](https://github.com/dnb-hugo) projects.

## Usage

```shell
npm install --save-dev dnb-hugo/commitlint-config
```

Then in package.json add the following lines:

```json
{
  "scripts": {
    "commitlint": "commitlint --from=HEAD~1"
  },
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "commitlint": {
    "extends": [
      "@dnb-hugo/commitlint-config"
    ]
  }
}
```
