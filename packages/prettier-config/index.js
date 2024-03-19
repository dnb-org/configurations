const fs = require("fs");

// https://prettier.io/docs/en/options.html
let config = {
  printWidth: 120,
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
      "files": ["*.html"],
      "options": {
        "parser": "go-template",
        "goTemplateBracketSpacing": true,
        "printWidth": 120,
        "bracketSameLine": true
      }
    },
    {
      "files": ["*.js", "*.ts"],
      "options": {
        "useTabs": false,
        "printWidth": 120,
        "singleQuote": true
      }
    },
  ],
  plugins: [
    "prettier-plugin-go-template"
  ],
};

const tailwindPath = "./tailwind.config.js";
try {
  if (fs.existsSync(tailwindPath)) {
    config = {
      ...config,
      tailwindConfig: tailwindPath,
    };
  }
} catch {
  // console.log(error);
}
module.exports = config;
