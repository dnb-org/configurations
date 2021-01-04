module.exports = {
  extends: [
    "stylelint-config-sass-guidelines",
    "stylelint-config-rational-order",
  ],
  rules: {
    "at-rule-no-unknown": null,
    indentation: 2,
    "string-quotes": "single",
    "no-duplicate-selectors": true,
    "color-hex-case": "lower",
    "color-hex-length": "long",
    "color-named": "never",
    "selector-attribute-quotes": "always",
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-space-before": "never",
    "declaration-colon-space-after": "always",
    "number-leading-zero": "always",
    "function-url-quotes": "always",
    "font-weight-notation": "numeric",
    "font-family-name-quotes": "always-where-recommended",
    "comment-empty-line-before": "always",
    "selector-no-qualifying-type": [
      true,
      {
        ignore: ["attribute", "class"],
      },
    ],
    // scss rules
    "scss/at-extend-no-missing-placeholder": null,
    // order rules:
    "plugin/rational-order": [true, {
      "border-in-box-model": true,
      "empty-line-between-groups": true,
    }]
  },
};
