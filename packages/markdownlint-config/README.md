Adds a configuration file for Markdownlint.

## Usage with VSCode

Install the VSCode plugin [Markdownlint by David Anson](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint). Then add a local configuration file in `.markdownlint.json` or `markdownlint.jsonc`:

```jsonc
{
  "extends": "@davidsneighbour/markdownlint-config"
}
```

The filename, and -format can be any of the ones listed on the [markdownlint-cli2 configuration page](https://github.com/DavidAnson/markdownlint-cli2#configuration) but my advice is to stay with JSON or JSONC.

Add local rule overrides:

```jsonc
{
  "extends": "@davidsneighbour/markdownlint-config",
  "MD040": false
}
```

The configuration differs from the [default ruleset](https://github.com/DavidAnson/vscode-markdownlint#rules) in the following points:

*   [MD004](https://github.com/DavidAnson/markdownlint/blob/main/doc/md004.md) (unordered list style) is set to "consistent". That is by preference.
*   [MD013](https://github.com/DavidAnson/markdownlint/blob/main/doc/md013.md) (line-length) is disabled. I find that today the editor can take care of line flow and having only 80 characters long lines breaks the ease of working with these files.
*   [MD025](https://github.com/DavidAnson/markdownlint/blob/main/doc/md025.md) (single-title/single-h1) is disabled. The rule should be kept in mind, but every now and then multiple top level headlines are useful.
*   [MD030](https://github.com/DavidAnson/markdownlint/blob/main/doc/md030.md) (list-marker-space) is disabled. There is no reason to have two spaces after list item markers.
*   [MD041](https://github.com/DavidAnson/markdownlint/blob/main/doc/md041.md) (first-line-heading/first-line-h1) is disabled. Many README files might start with badges instead of headings.

## Usage with CLI (or [Lint Staged](https://github.com/okonet/lint-staged))

## Additional tips for the work with Markdown

*   Working with VSCode I suggest installing the plugin [Markdown All In One by Yu Zhang](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one).

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
