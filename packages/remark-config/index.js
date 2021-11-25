module.exports = {
  plugins: [
    // presets
    "remark-preset-lint-styleguide",
    "remark-preset-lint-consistent",

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
    "remark-lint-no-repeat-punctuation",
    [
      "remark-lint-emoji-limit",
      [
        "warn",
        {
          max: 2,
        },
      ],
    ],
    "remark-lint-no-empty-sections",
    "remark-lint-heading-whitespace",
  ],
};
