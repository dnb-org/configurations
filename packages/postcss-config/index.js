const cssnano = require("cssnano");
const postcsspresetenv = require("postcss-preset-env");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [
    autoprefixer(),
    postcsspresetenv({
      stage: 2
    }),
    cssnano({
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ],
};
