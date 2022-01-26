"use strict";

const fs = require('fs');

const path = './tailwind.config.js';
let tailwindConfig = null;
try {
  if (fs.existsSync(path)) {
    tailwindConfig = path;
  }
} catch (err) {
  console.log(err);
}

module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: "es5",
  quoteProps: "as-needed",
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: "always",
  endOfLine: "lf",
  goTemplateBracketSpacing: true,
  overrides: [
    {
      files: ["*.html"],
      options: {
        parser: "go-template",
      },
    },
  ],
  tailwindConfig,
};
