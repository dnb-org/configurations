const fs = require("fs");

// https://prettier.io/docs/en/options.html
let config = {

  editorconfig: true,
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  quoteProps: "as-needed",
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: "always",
  proseWrap: "preserve", // for markdown wrapping
  htmlWhitespaceSensitivity: "css", // <css|strict|ignore>
  endOfLine: "lf",
  embeddedLanguageFormatting: "off", // <auto|off>
  singleAttributePerLine: false, // for html attributes

  overrides: [
    {
      "files": ["*.html"],
      "options": {
        "parser": "go-template", // see https://prettier.io/docs/en/options#parser
        "goTemplateBracketSpacing": true,
        "bracketSameLine": true, // for go-template plugin
      }
    },
    {
      "files": ["*.js", "*.ts"],
      "options": {
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
} catch (error) {
  console.log(error);
}

export default config;
