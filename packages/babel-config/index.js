module.exports = (/** @type {{ cache: (arg0: boolean) => void; }} */ api) => {
  api.cache(true);

  const presets = ["@babel/preset-env"];

  return {
    presets,
  };
};
