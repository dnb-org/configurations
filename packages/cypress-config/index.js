const deepmerge = require("deepmerge");
const path = require("path");

function loadConfig(filename) {
  const configJson = require(filename);
  if (configJson.extends) {
    const baseConfigFilename = path.join(
      path.dirname(filename),
      configJson.extends
    );
    const baseConfig = loadConfig(baseConfigFilename);
    console.log("merging %s with %s", baseConfigFilename, filename);
    return deepmerge(baseConfig, configJson);
  }
  return configJson;
}

module.exports = (on, config) =>
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  loadConfig(config.configFile);
