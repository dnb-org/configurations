This is a textlint preset used across David's Neighbour's (DNB) projects.

You probably won’t need this ;)

## Installation

```shell script
npm install -D dnb-hugo/textlint-config-dnb
```

## Configuration

Put the following into `.textlintrc.js` in the root of your project.

```js
const defaultTextlintConfig = require('@dnb-hugo/textlint-config-dnb');
module.exports = defaultTextlintConfig;
```
