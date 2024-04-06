# Remark Lint

## Why?

This package contains configuration for [remark-lint](https://github.com/remarkjs/remark-lint/) to lint markdown code styles. It bundles standard presets and sets some opinionated rules.. It is used by [@davidsneighbour](https://github.com/davidsneighbour) to lint markdown files in all projects.

## Configuration

**Method 1:** add it as JSON structure in `.remarkrc` at the root of your project:

```json
{
  "plugins": ["@davidsneighbour/remark-config"]
}
```

**Method 2:** add it as a configuration object under `remarkConfig` in `package.json`:

```json
{
  "remarkConfig": {
    "plugins": ["@davidsneighbour/remark-config"]
  }
}
```

**Method 3:** add it as a JavaScript object in `.remarkrc.js` at the root of your project. This package is [ESM only](https://gist.github.com/davidsneighbour/0efcc9b24d21e6226c973e401a413b2c) now:

```js
import defaultRemarkConfig from "@davidsneighbour/remark-config";

const localRemarkConfig = [
    // add your changes here
];

const mergedConfiguration = {
    ...defaultRemarkConfig,
    ...localRemarkConfig,
};

export default mergedConfiguration;
```

Or without changes:

```js
import defaultRemarkConfig from "@davidsneighbour/remark-config";
export default defaultRemarkConfig;
```

## Configuration rules in this package

The `davidsneighbour` ruleset for `remark-lint` uses the following two presets:

*   [`remark-preset-lint-styleguide`](https://www.npmjs.com/package/remark-preset-lint-styleguide) - a preset to maintain good quality readable markdown files.
*   [`remark-preset-lint-consistent`](https://www.npmjs.com/package/remark-preset-lint-consistent) - a preset that enforces consistency and helps avoid common known pitfalls in markdown parsers (consistency rules may override the styleguide rules).

The following plugins are added:

*   [remark-frontmatter](https://github.com/remarkjs/remark-frontmatter) to support frontmatter in markdown files

The following rules have different settings than the presets:

*   [remark-lint-linebreak-style](https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-linebreak-style) - prefer unix linebreak `\n`.
*   [remark-lint-maximum-line-length](https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-maximum-line-length) - removes any limit to line length.
*   [remark-lint-no-file-name-irregular-characters](https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-file-name-irregular-characters) - lint filenames for irregular characters.

## Scripts in package.json

```json
"scripts": {
 "lint:remark": "remark",
 "lint:remark2": "remark ."
}
```

## All configurations

| Configurations | | |
| --- | --- | --- |
| **Build Tools** | | |
| [Babel](packages/babel-config) | [Webpack](packages/webpack-config) | |
| **Testing** | | |
| [Cypress](packages/cypress-config) | [HTML Validate](packages/htmlvalidate-config/) |  |
| **Linters and Formatters** | | |
| [Browserslist](packages/browserslist-config) | [ESLint](packages/eslint-config) | [PostCSS](packages/postcss-config) |
| [Prettier](packages/prettier-config) | [Stylelint](packages/stylelint-config) | |
| **Project Management** | | |
| [Commitlint](packages/commitlint-config) | [Release](packages/release-config) |  |
| **Markdown and Writing** | | |
| [Markdownlint](packages/markdownlint-config) | [Remark Lint](packages/remark-config) |  |
| **Other Tools** | | |
| [Bootstrap](packages/bootstrap-config) | [Tools](packages/tools) |  |
