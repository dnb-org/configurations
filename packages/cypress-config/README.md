## Usage

Add the configuration package to your setup:

```shell
npm install -D @dnb-hugo/cypress
```

Create `tests/cypress/plugins.index.js` with the following content:

```js
module.exports = (on, config) => {
  console.log(config)
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

This configuration setup is based on [Gleb Bahmutov's blog post](https://www.cypress.io/blog/2020/06/18/extending-the-cypress-config-file/)
