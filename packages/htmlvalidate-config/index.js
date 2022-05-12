module.exports = {
  extends: ["html-validate:recommended"],
  rules: {
    "long-title": [
      "error",
      {
        maxlength: 100,
      },
    ],
    "valid-id": [
      "error",
      {
        relaxed: true,
      },
    ],
    "no-inline-style": [
      "error",
      {
        include: ["lite-youtube"],
      },
    ],
    "require-sri": [
      "error",
      {
        target: "crossorigin",
      },
    ],
    "no-unknown-elements": "error",
    "no-style-tag": "error",
    "no-missing-references": "error",
    "missing-doctype": "error",
    "input-missing-label": "error",
    "heading-level": [
      "error",
      {
        allowMultipleH1: false,
        minInitialRank: "h1",
        sectioningRoots: ["dialog", '[role="dialog"]'],
      },
    ],
    "class-pattern": [
      "error",
      {
        pattern: "kebabcase",
      },
    ],
    "attr-pattern": "error",
    "allowed-links": [
      "error",
      {
        allowExternal: true,
        allowRelative: false,
        allowAbsolute: true,
        allowBase: false,
      },
    ],
  },
};
