module.exports = {
  extends: [
    "airbnb-base",
    "prettier",
    "plugin:compat/recommended",
    "plugin:markdown/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript"
  ],
  overrides: [
    {
      files: ["**/*.md"],
      processor: "markdown/markdown",
    },
    {
      // customize the configuration ESLint uses for ```js
      // fenced code blocks inside .md files.
      files: ["**/*.md/*.js"],
      rules: {},
    },
  ],
  plugins: ["anti-trojan-source"],
  rules: {
    "anti-trojan-source/no-bidi": "error"
  },
  env: {
    browser: true,
  },
};
