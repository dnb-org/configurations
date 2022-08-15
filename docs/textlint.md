# Textlint

Put the following into `.textlintrc.js` in the root of your project.

```js
const defaultTextlintConfig = require("@davidsneighbour/textlint-config");
module.exports = defaultTextlintConfig;
```

**OR** add a `--config` option to your npm-script:

in package.json:

```npm
"lint:textlint": "textlint --config @davidsneighbour/textlint-config .",
"lint:textlint:fix": "textlint --config @davidsneighbour/textlint-config --fix .",
"lint:textlint2": "textlint --config @davidsneighbour/textlint-config",
"lint:textlint2:fix": "textlint --config @davidsneighbour/textlint-config --fix",
```

To ignore files add a `.textlintignore`:

```ignore
LICENSE.md
CHANGELOG.md
```
