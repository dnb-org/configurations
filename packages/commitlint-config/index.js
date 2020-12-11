module.exports = {
  "extends": [
    "@commitlint/config-conventional"
  ],
  "rules": {
    "body-max-line-length": [
      0,
      "always",
      100
    ],
    "type-enum": [
      0,
      "always",
      [
        "feat",
        "fix",
        "layouts",
        "refactor",
        "test",
        "chore",
        "wip",
        "content"
      ]
    ]
  }
};
