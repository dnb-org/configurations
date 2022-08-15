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

- All cypress files reside within the `tests` directory (no need for additional directories in the root directory).
- The base url is set to <http://localhost:1313> - default for all Hugo dev server instances.
- IDEs like IntelliJ import the schema to offer typeahead code hints.
- `watchForFileChanges` is enabled.
