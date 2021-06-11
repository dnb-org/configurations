## Usage

Create `tests/cypress/plugins.index.js` with the following content:

```js
module.exports = (on, config) => {
  console.log(config)
  return require('@dnb-hugo/cypress-config')(config.configFile)
}
```
