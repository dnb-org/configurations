# Prettier

[More information about Prettier configuration](https://prettier.io/docs/en/options.html).

Add a key in your `package.json` file.

```json
"prettier": "@davidsneighbour/config/prettier"
```

or create a `.prettierrc` , `.prettierrc.yaml` , `.prettierrc.yml` or `.prettierrc.json` file and export a string.

```yaml
"@davidsneighbour/config/prettier"
```

or create a `prettier.config.js` or `.prettierrc.js` file and export an object.

```js
module.exports = {
  ...require("@davidsneighbour/config/prettier"),
  endOfLine: 'lf', // to overwrite the property
};
```

Use with TailwindCSS:

This configuration implements [Tailwinds Prettier Plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss). To activate it either have a tailwind.config.js in your projects root or override the prettier configuration at `tailwindConfig` with the proper path.

```js
const defaultConfiguration = require("@davidsneighbour/config/prettier");
const localConfiguration = {
  tailwindConfig: "new path to your config",
};
const configuration = {
  ...defaultConfiguration,
  ...localConfiguration,
};
module.exports = configuration;
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
