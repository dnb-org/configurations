## Usage

Add the configuration package to your setup:

```shell
npm install -D @dnb-hugo/cypress
```

Create `tests/cypress/plugins.index.js` with the following content:

```js
module.exports = (on, config) => {
  return require('@dnb-hugo/cypress-config')(config.configFile)
}
```

Then add in `cypress.json` at least the following two lines:

```json
{
  "extends": "@dnb-hugo/cypress-config/base.json",
  "pluginsFile": "tests/cypress/plugins/index.js"
}
```

This configuration setup uses the approach of [Gleb Bahmutov's blog post](https://www.cypress.io/blog/2020/06/18/extending-the-cypress-config-file/).

## Default settings of this configuration

- All cypress files reside within the `tests` directory (no need for additional directories in the root directory).
- The base url is set to http://localhost:1313 - default for all Hugo dev server instances.
- IDEs like IntelliJ import the schema to offer typeahead code hints. 
- `watchForFileChanges` is enabled. 
