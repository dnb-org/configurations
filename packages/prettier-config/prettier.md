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

- [Babel](/docs/babel.md)
- [Bootstrap](/docs/bootstrap.md)
- [Browserslist](/docs/browserslist.md)
- [Commitlint](/docs/commitlint.md)
- [CssNano](/docs/cssnano.md)
- [Cypress](/docs/cypress.md)
- [ESLint](/docs/eslint.md)
- [Markdownlint](/docs/markdownlint.md)
- [PostCSS](/docs/postcss.md)
- [Prettier](/docs/prettier.md)
- [Remark Lint](/docs/remark-lint.md)
- [Standard Version](/docs/standard-version.md)
- [Stylelint](/docs/stylelint.md)
- [Textlint](/docs/textlint.md)
- [Tools](/docs/tools.md)
- [Webpack](/docs/webpack.md)
