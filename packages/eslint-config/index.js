module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
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
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
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
      rules: {
        "no-console": "off",
        "import/no-unresolved": "off",
      },
    },
  ],
  plugins: [
    "anti-trojan-source",
    "@typescript-eslint",
    "no-loops",
    "prettier",
    "sonarjs",
    "html",
  ],
  rules: {
    "prettier/prettier": "error",
    "anti-trojan-source/no-bidi": "error",
    "no-loops/no-loops": "error",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/ban-ts-comment": 0,
    "unicorn/no-array-for-each": "off",
  },
  settings: {
    "html/html-extensions": [".html", ".htm"],
    "html/xml-extensions": [".xml"],
    "html/indent": "0",
    "html/report-bad-indent": "error",
  },
  env: {
    browser: true,
  },
};
