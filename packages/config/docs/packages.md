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

# Commitlint

## Rules

This configuration extends on [conventional-changelog/commitlint](https://github.com/conventional-changelog/commitlint) with the following changes:

-   Types are of one of: content, docs, feat, fix, layouts, refactor, test, chore, wip
-   Maximum line length is 100 characters

## Setup

In package.json add the following lines:

```json
{
  "scripts": {
    "commitlint": "commitlint --from=HEAD~1"
  }
}
```

Then add .commitlintrc.js with the following content:

```js
module.exports = {
  extends: ["@davidsneighbour/config/commitlint"],
};
```

Lastly add a commit-msg hook to your git repository:

```bash
#!/bin/bash

npx --no-install commitlint --edit $1
```

## Usage

If you set up the git hook for commit messages you are good to go. Every time you add a commit it will check the message and complain if it's not right.

You can always manually check a commit with `npm run commitlint`.

If you wish to check a particular commit, you can do so by running ` npm run commitlint -- $COMMITHASH`.

# Stylelint

Add the configuration to your repository (for instance in `.stylelintrc` or `.stylelintrc.json` or the `stylelint` parameter in package.json):

```json
{
  "extends": "@davidsneighbour/config/stylelint"
}
```

To change parts of the configuration use the `rules` parameter.

```json
{
  "extends": "@davidsneighbour/config/stylelint",
  "rules": {
    "max-nesting-depth": null
  }
}
```

Add scripts to your package.json:

```json
{
  "scripts": {
    "lint:styles": "stylelint assets/scss/",
    "lint:styles:fix": "stylelint assets/scss/ --fix",
    "lint:styles:config": "stylelint --print-config index.js"
  }
}
```

Exchange the `assets/scss/` with your own styles folder.

## Usage

Run stylelint and show errors and warnings:

```shell
npm run stylelint
```

Run stylelint and fix automatically fixable issues:

```shell
npm run stylelint:fix
```

Print the current stylelint configuration:

```shell
npm run stylelint:config
```

# Babel

Create `.babelrc.js` with the following content:

```js
module.exports = {
  presets: ["module:@davidsneighbour/config/babel"],
};
```

or create `babel.config.json` with the following content:

```json
{
  "presets": ["module:@davidsneighbour/config/babel"]
}
```

We could also create a `babel` property inside of `package.json`:

```json
{
  "babel": {
    "presets": ["module:@davidsneighbour/config/babel"]
  }
}
```

To override settings of the preset use the `overrides` parameter:

```js
module.exports = {
  presets: ["module:@davidsneighbour/config/babel"],
  overrides: [
    {
      // override setup
    },
  ],
};
```

[More information about Babel configuration](https://babeljs.io/docs/en/options).

# Webpack

... to be written ...

# Remark Lint

Put the following into `.remarkrc` in the root of your project. Remove the `write-good` line if you want to ensure the quality of text. It tends to be overzealous though, so it's deactivated by default.

```json
{
  "plugins": ["@davidsneighbour/config/remark", ["remark-lint-write-good", false]]
}
```

or in `.remarkrc.js`:

```js
const defaultRemarkConfig = require("@davidsneighbour/config/remark");
module.exports = defaultRemarkConfig;
```

or in `remarkConfig` in `package.json`:

```json
{
  "remarkConfig": {
    "plugins": ["@davidsneighbour/config/remark"]
  }
}
```

### Configuration rules in this package

The `davidsneighbour` ruleset for `remark-lint` uses the following two presets:

-   [remark-preset-lint-styleguide](https://www.npmjs.com/package/remark-preset-lint-styleguide) - a preset to maintain good quality readable markdown files.
-   [remark-preset-lint-consistent](https://www.npmjs.com/package/remark-preset-lint-consistent) - a preset that enforces consistency and helps avoiding common known pitfalls in markdown parsers (consistency rules may override the styleguide rules).

The following rules and plugins are added or changed:

-   [remark-lint-first-heading-level](https://www.npmjs.com/package/remark-lint-first-heading-level) - sets the first heading level to h2, so that h1 can be used as page title after parsing
-   [remark-frontmatter](https://github.com/remarkjs/remark-frontmatter) - support frontmatter in markdown files
-   [remark-lint-linebreak-style](https://www.npmjs.com/package/remark-lint-linebreak-style) - sets the linebreak style to unix `\n` line endings
-   [remark-lint-write-good](https://www.npmjs.com/package/remark-lint-write-good) - checks style of the writing via [write-good](https://github.com/btford/write-good) and can be disabled (see configuration above)
-   [remark-lint-match-punctuation](https://github.com/laysent/remark-lint-plugins/tree/HEAD/packages/remark-lint-match-punctuation) to ensure programming punctuation comes in pairs.
-   [remark-lint-no-repeat-punctuation](https://github.com/laysent/remark-lint-plugins/tree/HEAD/packages/remark-lint-no-repeat-punctuation) to ensure punktuation not doubled
-   [remark-lint-emoji-limit](https://github.com/zerok/remark-lint-emoji-limit) - to make sure documents are not too emoji-y
-   [remark-lint-no-empty-sections](https://github.com/vhf/remark-lint-no-empty-sections) - to ensure no empty sections are in the documents
-   [remark-lint-heading-whitespace](https://github.com/vhf/remark-lint-heading-whitespace) - makes sure that no exotic whitespaces break parsing of headings

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
