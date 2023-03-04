"use strict";

const config = {

  "plugins": [

    // presets
    "remark-preset-lint-styleguide",
    "remark-preset-lint-consistent",

    // added plugins
    "remark-frontmatter",

    // changed rules
    [
      "remark-lint-linebreak-style",
      "unix"
    ],
    [
      "remark-lint-maximum-line-length",
      false
    ],
    [
      "remark-lint-no-file-name-irregular-characters",
      "\\.a-zA-Z0-9-_"
    ],

  ]

};

export default config;