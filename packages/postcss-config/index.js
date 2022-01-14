const cssnano = require("cssnano");
const purgecss = require("@fullhuman/postcss-purgecss");
const stylelint = require("stylelint");
const postcsspresetenv = require("postcss-preset-env");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [
    purgecss({
      content: ["./hugo_stats.json"],
      defaultExtractor: (content) => {
        const els = JSON.parse(content).htmlElements;
        return els.tags.concat(els.tags, els.classes, els.ids);
      },
    }),
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
