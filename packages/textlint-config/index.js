module.exports = {
  rules: {
    "no-todo": true,
    "textlint-rule-no-start-duplicated-conjunction": true,
    "max-comma": {
      max: 3,
    },
    "no-exclamation-question-mark": true,
    "no-dead-link": {
      checkRelative: true,
      baseURI: null,
      ignore: [],
      preferGET: [],
      ignoreRedirects: false,
      retry: 3,
      userAgent: "textlint-rule-no-dead-link/1.0",
    },
    "en-capitalization": {
      allowHeading: true,
      allowFigures: true,
      allowLists: true,
      allowWords: [],
    },
    "stop-words": {
      defaultWords: true,
      skip: ["Blockquote"],
      exclude: ["utilize", "period of time"],
    },
    "common-misspellings": {
      ignore: [],
    },
    "date-weekday-mismatch": true,
    terminology: {
      defaultTerms: true,
      skip: ["Blockquote"],
      exclude: ["CSS"],
    },
    alex: {
      allow: ["boogeyman-boogeywoman"],
    },
    "abbr-within-parentheses": true,
    spelling: {
      language: "en-gb",
      skipPatterns: ["JavaScript"],
      wordDefinitionRegexp: '/[\\w"]+/g',
      suggestCorrections: true,
    },
    "unexpanded-acronym": {
      ignore_acronyms: ["DNB", "OSS", "NPM"],
    },
    "footnote-order": true,
    "@textlint-rule/no-unmatched-pair": true,
    "@textlint-rule/no-invalid-control-character": true,
    "no-empty-section": true,
    "no-start-duplicated-conjunction": {
      interval: 2,
    },
  },
  plugins: ["html"],
};
