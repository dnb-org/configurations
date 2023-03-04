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

- [Babel](/packages/babel-config)
- [Bootstrap](/packages/bootstrap-config)
- [Browserslist](/packages/browserslist-config)
- [Commitlint](/packages/commitlint-config)
- [CssNano](/packages/cssnano-config)
- [Cypress](/packages/cypress-config)
- [ESLint](/packages/eslint-config)
- [Markdownlint](/packages/markdownlint-config)
- [PostCSS](/packages/postcss-config)
- [Prettier](/packages/prettier-config)
- [Remark Lint](/packages/remark-config)
- [Standard Version](/packages/standard-version-config)
- [Stylelint](/packages/stylelint-config)
- [Tools](/packages/tools)
- [Webpack](/packages/webpack-config)
