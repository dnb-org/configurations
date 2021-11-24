module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb-base",
    "prettier",
    "plugin:compat/recommended",
    "plugin:markdown/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
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
  plugins: ["anti-trojan-source", "@typescript-eslint", "no-loops", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "anti-trojan-source/no-bidi": "error",
    "no-loops/no-loops": "error",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/ban-ts-comment": "warning",
  },
  env: {
    browser: true,
  },
};
