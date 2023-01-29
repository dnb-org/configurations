module.exports = {
  "settings": {
    "emphasis": "*",
    "strong": "*"
  },
  plugins: [
    // presets
    "remark-preset-lint-styleguide",
    "remark-preset-lint-consistent",
    "remark-preset-lint-recommended",
    "remark-preset-lint-markdown-style-guide",

    // rules
    ["remark-lint-first-heading-level", 1],
    ["remark-lint-no-file-name-irregular-characters", "\\.a-zA-Z0-9-_"],

    // plugins
    "remark-frontmatter",
    ["remark-lint-linebreak-style", "unix"],
    ["remark-lint-maximum-line-length", 1000],
    [
      "remark-lint-write-good",
      [
        "warn",
        {
          passive: false,
          whitelist: ["read-only"],
        },
      ],
    ],
    "remark-lint-match-punctuation",
    ["remark-lint-no-repeat-punctuation", true],
    ["remark-lint-final-newline", true],
    "remark-lint-no-empty-sections",
    "remark-lint-heading-whitespace",
    "lint-fenced-code-flag",
    ["remark-validate-links", true],
    ["remark-lint-no-html", true],
    ["remark-lint-list-item-indent", false],
  ],
};
