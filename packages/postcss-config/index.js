const cssnano = require("cssnano");
const stylelint = require("stylelint");
const postcsspresetenv = require("postcss-preset-env");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [
    stylelint(),
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
