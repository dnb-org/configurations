Create a file `.versionrc.js` with the following contents:

```javascript
const defaultStandardVersion = require('@davidsneighbour/release-config');
module.exports = defaultStandardVersion;
```

> [!CAUTION]
> `commit-and-tag-version` does not yet support the ESM format. Keep it common(js)!

Add the following scripts to your package.json:

```json
{
  "scripts": {
    "release": "commit-and-tag-version --release-as patch -a -t \"v\" && ./bin/repo/release/postrelease",
    "release-next": "commit-and-tag-version --release-as minor -a -t \"v\" && ./bin/repo/release/postrelease",
    "release-major": "commit-and-tag-version --release-as major -a -t \"v\" && ./bin/repo/release/postrelease"
  }
}
```

## More information

* [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

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
