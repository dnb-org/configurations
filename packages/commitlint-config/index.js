export default {
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
        "content",
        "docs",
        "feat",
        "fix",
        "layouts",
        "refactor",
        "test",
        "chore",
        "wip"
      ]
    ]
  }
};
