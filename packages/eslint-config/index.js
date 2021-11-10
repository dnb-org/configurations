module.exports = {
  extends: [
    "airbnb-base",
    "prettier",
    "plugin:compat/recommended",
    "plugin:markdown/recommended",
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
  plugins: ["prettier", "markdown"],
  rules: {
    "prettier/prettier": "error",
  },
  env: {
    browser: true,
  },
};
