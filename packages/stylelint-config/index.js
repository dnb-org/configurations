/**
 * see https://stylelint.io/user-guide/rules/list/
 * see https://stylelint.io/user-guide/rules/regex/
 */
const config = {
  "customSyntax": "postcss-scss",
  "cache": true,
  "extends": ["stylelint-config-standard-scss"],
  "ignoreFiles": [],
  "plugins": [
    "stylelint-use-nesting",
    "stylelint-no-unsupported-browser-features",
    "stylelint-order"
  ],
  "rules": {
    "csstools/use-nesting": ["always", { "syntax": "scss" }],
    "alpha-value-notation": [
      "percentage",
      {
        "exceptProperties": [
          "opacity",
          "fill-opacity",
          "flood-opacity",
          "stop-opacity",
          "stroke-opacity"
        ]
      }
    ],
    "annotation-no-unknown": true,
    "at-rule-disallowed-list": [
      "debug"
    ],
    "at-rule-empty-line-before": [
      "always",
      {
        "except": [
          "blockless-after-same-name-blockless",
          "first-nested"
        ],
        "ignore": [
          "after-comment"
        ]
      }
    ],
    "at-rule-no-unknown": null,
    "at-rule-no-vendor-prefix": true,
    "block-no-empty": true,
    "color-function-notation": null,
    "color-hex-length": "long",
    "color-named": "never",
    "color-no-invalid-hex": true,
    "comment-empty-line-before": [
      "always",
      {
        "except": [
          "first-nested"
        ],
        "ignore": [
          "stylelint-commands"
        ]
      }
    ],
    "comment-no-empty": true,
    "comment-whitespace-inside": "always",
    "custom-media-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
      {
        "message": "(name) => `Expected custom media query name \"${name}\" to be kebab-case`"
      }
    ],
    "custom-property-empty-line-before": [
      "always",
      {
        "except": [
          "after-custom-property",
          "first-nested"
        ],
        "ignore": [
          "after-comment",
          "inside-single-line-block"
        ]
      }
    ],
    "custom-property-no-missing-var-function": true,
    "custom-property-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
      {
        "message": "(name) => `Expected custom property name \"${name}\" to be kebab-case`"
      }
    ],
    "declaration-block-no-duplicate-custom-properties": true,
    "declaration-block-no-duplicate-properties": [
      true,
      {
        "ignore": [
          "consecutive-duplicates-with-different-values"
        ]
      }
    ],
    "declaration-block-no-redundant-longhand-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-single-line-max-declarations": 1,
    "declaration-empty-line-before": [
      "always",
      {
        "except": [
          "after-declaration",
          "first-nested"
        ],
        "ignore": [
          "after-comment",
          "inside-single-line-block"
        ]
      }
    ],
    "declaration-property-value-disallowed-list": {
      "border": [
        "none"
      ],
      "border-bottom": [
        "none"
      ],
      "border-left": [
        "none"
      ],
      "border-right": [
        "none"
      ],
      "border-top": [
        "none"
      ]
    },
    "font-family-name-quotes": "always-where-recommended",
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "font-weight-notation": "numeric",
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-name-case": "lower",
    "function-no-unknown": null,
    "function-url-quotes": "always",
    "hue-degree-notation": "angle",
    "import-notation": "string",
    "keyframe-block-no-duplicate-selectors": true,
    "keyframe-declaration-no-important": true,
    "keyframe-selector-notation": "percentage-unless-within-keyword-only-block",
    "keyframes-name-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
      {
        "message": "(name) => `Expected keyframe name \"${name}\" to be kebab-case`"
      }
    ],
    "length-zero-no-unit": [
      true,
      {
        "ignore": [
          "custom-properties"
        ]
      }
    ],
    "max-nesting-depth": [
      3,
      {
        "ignoreAtRules": [
          "each",
          "media",
          "supports",
          "include"
        ]
      }
    ],
    "media-feature-name-no-unknown": true,
    "media-feature-name-no-vendor-prefix": true,
    "named-grid-areas-no-invalid": true,
    "no-descending-specificity": true,
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-empty-source": true,
    "no-invalid-double-slash-comments": true,
    "no-invalid-position-at-import-rule": null,
    "no-irregular-whitespace": true,
    "number-max-precision": 4,
    "plugin/no-unsupported-browser-features": [
      true,
      {
        "browsers": "extends @davidsneighbour/browserslist-config",
        "severity": "warning",
        "ignore": ["rem"],
        "ignorePartialSupport": true
      }
    ],
    "property-no-unknown": true,
    "property-no-vendor-prefix": true,
    "rule-empty-line-before": [
      "always-multi-line",
      {
        "except": [
          "first-nested"
        ],
        "ignore": [
          "after-comment"
        ]
      }
    ],
    "selector-attribute-quotes": "always",
    "selector-class-pattern": [
      "^[a-z0-9\\-]+$",
      {
        "message": "Selector should be written in lowercase with hyphens (selector-class-pattern)"
      }
    ],
    "selector-id-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
      {
        "message": "(selector) => `Expected id selector \"${selector}\" to be kebab-case`"
      }
    ],
    "selector-max-compound-selectors": 3,
    "selector-max-id": 1,
    "selector-no-qualifying-type": [
      true,
      {
        "ignore": [
          "attribute",
          "class"
        ]
      }
    ],
    "selector-no-vendor-prefix": true,
    "selector-not-notation": "complex",
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "selector-type-no-unknown": [
      true,
      {
        "ignore": [
          "custom-elements"
        ]
      }
    ],
    "shorthand-property-no-redundant-values": true,
    "string-no-newline": true,
    "unit-no-unknown": true,
    "value-keyword-case": "lower",
    "value-no-vendor-prefix": [
      true,
      {
        "ignoreValues": [
          "box",
          "inline-box"
        ]
      }
    ],
    "scss/at-extend-no-missing-placeholder": null,
    "scss/at-function-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension-blacklist": [
      "scss"
    ],
    "scss/at-mixin-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-colon-space-after": "always",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/dollar-variable-pattern": "^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/function-no-unknown": [true, { ignoreFunctions: ["tint-color", "shade-color"] }],
    "scss/percent-placeholder-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/selector-no-redundant-nesting-selector": true,
  },
  "order/order": [
    "custom-properties",
    "dollar-variables",
    {
      "name": "extend",
      "type": "at-rule"
    },
    {
      "hasBlock": false,
      "name": "include",
      "type": "at-rule"
    },
    "declarations",
    {
      "hasBlock": true,
      "name": "include",
      "type": "at-rule"
    },
    "rules",
    "at-rules"
  ],
  "order/properties-alphabetical-order": true,
  "order/properties-order": [
    {
      "emptyLineBefore": "always",
      "groupName": "special",
      "properties": [
        "composes",
        "@import",
        "@extend",
        "@mixin",
        "@at-root"
      ]
    },
    {
      "emptyLineBefore": "always",
      "groupName": "position",
      "properties": [
        "position",
        "top",
        "right",
        "bottom",
        "left",
        "z-index"
      ]
    },
    {
      "emptyLineBefore": "always",
      "groupName": "boxmodel",
      "properties": [
        "display",
        "flex",
        "flex-basis",
        "flex-direction",
        "flex-flow",
        "flex-grow",
        "flex-shrink",
        "flex-wrap",
        "grid",
        "grid-area",
        "grid-auto-rows",
        "grid-auto-columns",
        "grid-auto-flow",
        "grid-gap",
        "grid-row",
        "grid-row-start",
        "grid-row-end",
        "grid-row-gap",
        "grid-column",
        "grid-column-start",
        "grid-column-end",
        "grid-column-gap",
        "grid-template",
        "grid-template-areas",
        "grid-template-rows",
        "grid-template-columns",
        "gap",
        "align-content",
        "align-items",
        "align-self",
        "justify-content",
        "justify-items",
        "justify-self",
        "order",
        "float",
        "clear",
        "box-sizing",
        "width",
        "min-width",
        "max-width",
        "height",
        "min-height",
        "max-height",
        "margin",
        "margin-top",
        "margin-right",
        "margin-bottom",
        "margin-left",
        "padding",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "border",
        "border-color",
        "border-style",
        "border-width",
        "border-top",
        "border-top-color",
        "border-top-width",
        "border-top-style",
        "border-right",
        "border-right-color",
        "border-right-width",
        "border-right-style",
        "border-bottom",
        "border-bottom-color",
        "border-bottom-width",
        "border-bottom-style",
        "border-left",
        "border-left-color",
        "border-left-width",
        "border-left-style",
        "border-radius",
        "border-top-left-radius",
        "border-top-right-radius",
        "border-bottom-right-radius",
        "border-bottom-left-radius",
        "border-image",
        "border-image-source",
        "border-image-slice",
        "border-image-width",
        "border-image-outset",
        "border-image-repeat",
        "border-collapse",
        "border-spacing",
        "object-fit",
        "object-position",
        "overflow",
        "overflow-x",
        "overflow-y"
      ]
    },
    {
      "emptyLineBefore": "always",
      "groupName": "typography",
      "properties": [
        "color",
        "font",
        "font-weight",
        "font-size",
        "font-family",
        "font-style",
        "font-variant",
        "font-size-adjust",
        "font-stretch",
        "font-effect",
        "font-emphasize",
        "font-emphasize-position",
        "font-emphasize-style",
        "font-smooth",
        "line-height",
        "direction",
        "letter-spacing",
        "white-space",
        "text-align",
        "text-align-last",
        "text-transform",
        "text-decoration",
        "text-emphasis",
        "text-emphasis-color",
        "text-emphasis-style",
        "text-emphasis-position",
        "text-indent",
        "text-justify",
        "text-outline",
        "text-wrap",
        "text-overflow",
        "text-overflow-ellipsis",
        "text-overflow-mode",
        "text-orientation",
        "text-shadow",
        "vertical-align",
        "word-wrap",
        "word-break",
        "word-spacing",
        "overflow-wrap",
        "tab-size",
        "hyphens",
        "unicode-bidi",
        "columns",
        "column-count",
        "column-fill",
        "column-gap",
        "column-rule",
        "column-rule-color",
        "column-rule-style",
        "column-rule-width",
        "column-span",
        "column-width",
        "page-break-after",
        "page-break-before",
        "page-break-inside",
        "src"
      ]
    },
    {
      "emptyLineBefore": "always",
      "groupName": "visual",
      "properties": [
        "list-style",
        "list-style-position",
        "list-style-type",
        "list-style-image",
        "table-layout",
        "empty-cells",
        "caption-side",
        "background",
        "background-color",
        "background-image",
        "background-repeat",
        "background-position",
        "background-position-x",
        "background-position-y",
        "background-size",
        "background-clip",
        "background-origin",
        "background-attachment",
        "background-blend-mode",
        "outline",
        "outline-width",
        "outline-style",
        "outline-color",
        "outline-offset",
        "box-shadow",
        "box-decoration-break",
        "transform",
        "transform-origin",
        "transform-style",
        "backface-visibility",
        "perspective",
        "perspective-origin",
        "visibility",
        "cursor",
        "opacity",
        "filter",
        "isolation",
        "backdrop-filter",
        "mix-blend-mode"
      ]
    },
    {
      "emptyLineBefore": "always",
      "groupName": "animation",
      "properties": [
        "transition",
        "transition-delay",
        "transition-timing-function",
        "transition-duration",
        "transition-property",
        "animation",
        "animation-name",
        "animation-duration",
        "animation-play-state",
        "animation-timing-function",
        "animation-delay",
        "animation-iteration-count",
        "animation-direction",
        "animation-fill-mode"
      ]
    },
    {
      "emptyLineBefore": "always",
      "groupName": "misc",
      "properties": [
        "appearance",
        "content",
        "clip",
        "clip-path",
        "counter-reset",
        "counter-increment",
        "resize",
        "user-select",
        "nav-index",
        "nav-up",
        "nav-right",
        "nav-down",
        "nav-left",
        "pointer-events",
        "quotes",
        "touch-action",
        "will-change",
        "zoom",
        "fill",
        "fill-rule",
        "clip-rule",
        "stroke"
      ]
    }
  ]
};
module.exports = config;
