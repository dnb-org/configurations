- [Bootstrap](#bootstrap)
- [Markdownlint](#markdownlint)
- [ESLint](#eslint)
- [Browserslist](#browserslist)
- [Tools](#tools)
- [Prettier](#prettier)

# Bootstrap

Adds requirements for packages used by Bootstrap

- [@popperjs/core](https://www.npmjs.com/package/@popperjs/core) - Tooltip & Popover Positioning Engine
- [bootstrap](https://www.npmjs.com/package/bootstrap) - Sleek, intuitive, and powerful front-end framework for faster and easier web development.
- @types/bootstrap - Typescript types for Bootstrap

# Markdownlint

Adds a configuration file for Markdownlint.
Currently does not add markdownlint itself as package. Install it in VSCode as plugin.

Local configuration in `.markdownlint.json`:

```json
{
    "extends": "node_modules/@davidsneighbour/config/.markdownlint.json"
}
```

Add local overrides:

```json
{
  "extends": "node_modules/@davidsneighbour/config/.markdownlint.json",
  "MD040": false
}
```

# ESLint

This adds [@davidsneighbour/eslint-config](https://github.com/davidsneighbour/configurations/tree/main/packages/eslint-config) as requirement and makes it's configuration available. Read the [package documentation of @davidsneighbour/eslint-config](https://github.com/davidsneighbour/configurations/tree/main/packages/eslint-config).

# Browserslist

This adds [@davidsneighbour/browserslist-config](https://github.com/davidsneighbour/configurations/tree/main/packages/browserslist-config) as requirement and makes it's configuration available. Read the [package documentation of @davidsneighbour/browserslist-config](https://github.com/davidsneighbour/configurations/tree/main/packages/browserslist-config).

# Tools

Adds requirements for commonly used tool packages

- [rimraf](https://www.npmjs.com/package/rimraf) - The UNIX command `rm -rf` for node.
- [npm-run-all](https://www.npmjs.com/package/npm-run-all) - A CLI tool to run multiple npm-scripts in parallel or sequential.

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

# PostCSS

Create `postcss.config.js` with the following content:

```js
const config = require("@davidsneighbour/config/postcss");
module.exports = config;
```

[More information about PostCSS configuration](https://github.com/postcss/postcss).

Note about using PostCSS in [GoHugo](https://gohugo.io)

GoHugo is weird, but great. To get PostCSS to work with GoHugo the `postcss-cli` package needs to be installed in the
project itself and is not handled through this configuration. Run the following to get PostCSS working in GoHugo:

```shell
npm install --save-dev postcss-cli
```

A global `postcss-cli` installation won't work if the plugins in this package are not installed globally as well.

# cssnano

Create `cssnano.config.js` with the following content:

```js
const preset = require("@davidsneighbour/config/cssnano");
module.exports = preset();
```

[More information about configuring CSSNano](https://cssnano.co/docs/config-file).

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

# Cypress

Create `tests/cypress/plugins.index.js` with the following content:

```js
// noinspection JSUnresolvedVariable
module.exports = (on, config) =>
  // eslint-disable-next-line global-require
  require("@davidsneighbour/config/cypress")(config.configFile);
```

Then add in `cypress.json` at least the following two lines:

```json
{
  "extends": "@davidsneighbour/confing/cypress-base.json",
  "pluginsFile": "tests/cypress/plugins/index.js"
}
```

This configuration setup uses the approach of [Gleb Bahmutov's blog post](https://www.cypress.io/blog/2020/06/18/extending-the-cypress-config-file/).

## Default settings of this configuration

-   All cypress files reside within the `tests` directory (no need for additional directories in the root directory).
-   The base url is set to http://localhost:1313 - default for all Hugo dev server instances.
-   IDEs like IntelliJ import the schema to offer typeahead code hints.
-   `watchForFileChanges` is enabled.
