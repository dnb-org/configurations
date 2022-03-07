module.exports = {
  extends: ["html-validate:recommended"],
  rules: {
    "void-style": 0,
    "no-inline-styles": [
      2,
      {
        include: [],
        exclude: [],
        allowedProperties: ["display"],
      },
    ],
    "svg-focusable": 0,
    "no-trailing-whitespace": 0,
    "no-inline-style": 0,
    "doctype-html": 0,
    "attr-quotes": 0,
    "prefer-tbody": 0,
    "no-dup-id": 0,
    "long-title": 0,
    "element-required-attributes": 0,
    "prefer-native-element": 0,
    "element-required-content": 0,
    "wcag/h30": 0,
  },
  transform: {
    "^.*\\.md$": "html-validate-markdown",
  },
};
