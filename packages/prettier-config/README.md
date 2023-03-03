# Prettier

[More information about Prettier configuration](https://prettier.io/docs/en/options.html).

Add a key in your `package.json` file.

```json
"prettier": "@davidsneighbour/prettier-config"
```

or create a `.prettierrc` , `.prettierrc.yaml` , `.prettierrc.yml` or `.prettierrc.json` file and export a string.

```yaml
"@davidsneighbour/prettier-config"
```

or create a `prettier.config.js` or `.prettierrc.js` file and export an object.

```js
module.exports = {
  ...require("@davidsneighbour/prettier-config"),
  endOfLine: 'lf', // to overwrite the property
};
```

## Use with TailwindCSS:

This configuration implements [Tailwinds Prettier Plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss). To activate it either have a tailwind.config.js in your projects root or override the prettier configuration at `tailwindConfig` with the proper path.

```js
const defaultConfiguration = require("@davidsneighbour/prettier-config");
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

- [Babel](/packages/babel-config#readme)
- [Bootstrap](/packages/bootstrap-config#readme)
- [Browserslist](/packages/browserslist-config#readme)
- [Commitlint](/packages/commitlint-config#readme)
- [CssNano](/packages/cssnano-config#readme)
- [Cypress](/packages/cypress-config#readme)
- [ESLint](/packages/eslint-config#readme)
- [Markdownlint](/packages/markdownlint-config#readme)
- [PostCSS](/packages/postcss-config#readme)
- [Prettier](/packages/prettier-config#readme)
- [Remark Lint](/packages/remark-config#readme)
- [Standard Version](/packages/standard-version-config#readme)
- [Stylelint](/packages/stylelint-config#readme)
- [Textlint](/packages/textlint-config#readme)
- [Tools](/packages/tools#readme)
- [Webpack](/packages/webpack-config#readme)
