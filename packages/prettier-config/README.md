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
- [Textlint](/packages/textlint-config)
- [Tools](/packages/tools)
- [Webpack](/packages/webpack-config)
