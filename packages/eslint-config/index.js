module.exports = {
  "parser": "@typescript-eslint/parser",
  extends: [
    "airbnb-base",
    "prettier",
    "plugin:compat/recommended",
    "plugin:markdown/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
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
  plugins: ["anti-trojan-source", "@typescript-eslint"],
  rules: {
    "anti-trojan-source/no-bidi": "error"
  },
  env: {
    browser: true,
  },
};
