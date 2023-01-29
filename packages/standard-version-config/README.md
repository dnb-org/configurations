# Standard Version

Create a file `.versionrc.js` with the following contents:

```javascript
const defaultStandardVersion = require("@davidsneighbour/config/standard-version");
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
