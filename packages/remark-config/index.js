"use strict";

/**
 * @summary
 *   Preset of remark-lint rules for markdown files.
 */

/**
 * @typedef {import('unified').Preset} Preset
 */
import remarkLint from "remark-lint";
import remarkFrontmatter from "remark-frontmatter";
import remarkLintBlockquoteIndentation from "remark-lint-blockquote-indentation";
import remarkLintCheckboxCharacterStyle from "remark-lint-checkbox-character-style";
import remarkLintCheckboxContentIndent from "remark-lint-checkbox-content-indent";
import remarkLintCodeBlockStyle from "remark-lint-code-block-style";
import remarkLintDefinitionCase from "remark-lint-definition-case";
import remarkLintDefinitionSpacing from "remark-lint-definition-spacing";
import remarkLintEmphasisMarker from "remark-lint-emphasis-marker";
import remarkLintFencedCodeFlag from "remark-lint-fenced-code-flag";
import remarkLintFencedCodeMarker from "remark-lint-fenced-code-marker";
import remarkLintFileExtension from "remark-lint-file-extension";
import remarkLintFinalDefinition from "remark-lint-final-definition";
import remarkLintFinalNewline from "remark-lint-final-newline";
import remarkLintFirstHeadingLevel from "remark-lint-first-heading-level";
import remarkLintHardBreakSpaces from "remark-lint-hard-break-spaces";
import remarkLintHeadingIncrement from "remark-lint-heading-increment";
import remarkLintHeadingStyle from "remark-lint-heading-style";
import remarkLintLinebreakStyle from "remark-lint-linebreak-style";
import remarkLintLinkTitleStyle from "remark-lint-link-title-style";
import remarkLintListItemBulletIndent from "remark-lint-list-item-bullet-indent";
import remarkLintListItemContentIndent from "remark-lint-list-item-content-indent";
import remarkLintListItemIndent from "remark-lint-list-item-indent";
import remarkLintListItemSpacing from "remark-lint-list-item-spacing";
import remarkLintMaximumHeadingLength from "remark-lint-maximum-heading-length";
import remarkLintMaximumLineLength from "remark-lint-maximum-line-length";
import remarkLintNoBlockquoteWithoutMarker from "remark-lint-no-blockquote-without-marker";
import remarkLintNoConsecutiveBlankLines from "remark-lint-no-consecutive-blank-lines";
import remarkLintNoDuplicateDefinitions from "remark-lint-no-duplicate-definitions";
import remarkLintNoDuplicateHeadings from "remark-lint-no-duplicate-headings";
import remarkLintNoDuplicateHeadingsInSection from "remark-lint-no-duplicate-headings-in-section";
import remarkLintNoEmphasisAsHeading from "remark-lint-no-emphasis-as-heading";
import remarkLintNoEmptyURL from "remark-lint-no-empty-url";
import remarkLintNoFileNameArticles from "remark-lint-no-file-name-articles";
import remarkLintNoFileNameConsecutiveDashes from "remark-lint-no-file-name-consecutive-dashes";
import remarkLintNoFileNameIrregularCharacters from "remark-lint-no-file-name-irregular-characters";
import remarkLintNoFileNameMixedCase from "remark-lint-no-file-name-mixed-case";
import remarkLintNoFileNameOuterDashes from "remark-lint-no-file-name-outer-dashes";
import remarkLintNoHeadingContentIndent from "remark-lint-no-heading-content-indent";
import remarkLintNoHeadingIndent from "remark-lint-no-heading-indent";
import remarkLintNoHeadingLikeParagraph from "remark-lint-no-heading-like-paragraph";
import remarkLintNoHeadingPunctuation from "remark-lint-no-heading-punctuation";
import remarkLintNoHTML from "remark-lint-no-html";
import remarkLintNoLiteralURLs from "remark-lint-no-literal-urls";
import remarkLintNoMultipleToplevelHeadings from "remark-lint-no-multiple-toplevel-headings";
import remarkLintNoReferenceLikeUrl from "remark-lint-no-reference-like-url";
import remarkLintNoShellDollars from "remark-lint-no-shell-dollars";
import remarkLintNoShortcutReferenceImage from "remark-lint-no-shortcut-reference-image";
import remarkLintNoShortcutReferenceLink from "remark-lint-no-shortcut-reference-link";
import remarkLintNoTableIndentation from "remark-lint-no-table-indentation";
import remarkLintNoTabs from "remark-lint-no-tabs";
import remarkLintNoUndefinedReferences from "remark-lint-no-undefined-references";
import remarkLintNoUnusedDefinitions from "remark-lint-no-unused-definitions";
import remarkLintOrderedListMarkerStyle from "remark-lint-ordered-list-marker-style";
import remarkLintRuleStyle from "remark-lint-rule-style";
import remarkLintStrongMarker from "remark-lint-strong-marker";
import remarkLintTableCellPadding from "remark-lint-table-cell-padding";
import remarkLintTablePipeAlignment from "remark-lint-table-pipe-alignment";
import remarkLintTablePipes from "remark-lint-table-pipes";
import remarkLintUnorderedListMarkerStyle from "remark-lint-unordered-list-marker-style";

/** @type {Preset} */
const config = {

  "plugins": [

    // the linter
    [remarkLint],
    // the rules alphabetically
    [remarkFrontmatter],
    [remarkLintBlockquoteIndentation, ['error', 2]],
    [remarkLintCheckboxCharacterStyle, ['error', { checked: 'x', unchecked: ' ' }]],
    [remarkLintCheckboxContentIndent, ['error']],
    [remarkLintCodeBlockStyle, ['error', 'fenced']],
    [remarkLintDefinitionCase, ['error']],
    [remarkLintDefinitionSpacing, ['error']],
    [remarkLintEmphasisMarker, ['error', '*']],
    [remarkLintFencedCodeFlag, ['error']],
    [remarkLintFencedCodeMarker, ['error', '`']],
    [remarkLintFileExtension, ['error', 'md']],
    [remarkLintFinalDefinition, ['error']],
    [remarkLintFinalNewline, ['error']],
    [remarkLintFirstHeadingLevel, ['warn', 2]],
    [remarkLintHardBreakSpaces, ['error']],
    [remarkLintHeadingIncrement, ['error']],
    [remarkLintHeadingStyle, ['error', 'atx']],
    [remarkLintLinebreakStyle, "unix"],
    [remarkLintLinkTitleStyle, ['error', '"']],
    [remarkLintListItemBulletIndent, ['error']],
    [remarkLintListItemContentIndent, ['error']],
    [remarkLintListItemIndent, ['error', 'space']],
    [remarkLintListItemSpacing, ['error', { checkBlanks: true }]],
    [remarkLintMaximumHeadingLength, ['warn', 60]],
    [remarkLintMaximumLineLength, false],
    [remarkLintNoBlockquoteWithoutMarker, ['error']],
    [remarkLintNoConsecutiveBlankLines, ['error']],
    [remarkLintNoDuplicateDefinitions, ['error']],
    [remarkLintNoDuplicateHeadings, ['warn']],
    [remarkLintNoDuplicateHeadingsInSection, ['error']],
    [remarkLintNoEmphasisAsHeading, ['error']],
    [remarkLintNoEmptyURL, ['error']],
    [remarkLintNoFileNameArticles, ['error']],
    [remarkLintNoFileNameConsecutiveDashes, ['error']],
    [remarkLintNoFileNameIrregularCharacters, "\\.a-zA-Z0-9-_"],
    [remarkLintNoFileNameMixedCase, ['error']],
    [remarkLintNoFileNameOuterDashes, ['error']],
    [remarkLintNoHeadingContentIndent, ['error']],
    [remarkLintNoHeadingIndent, ['error']],
    [remarkLintNoHeadingLikeParagraph, ['error']],
    [remarkLintNoHeadingPunctuation, ['error', '.,;:']],
    [remarkLintNoHTML, ['warn']],
    [remarkLintNoLiteralURLs, ['error']],
    [remarkLintNoMultipleToplevelHeadings, ['error', 1]],
    [remarkLintNoReferenceLikeUrl, ['error']],
    [remarkLintNoShellDollars, ['error']],
    [remarkLintNoShortcutReferenceImage, ['error']],
    [remarkLintNoShortcutReferenceLink, ['error']],
    [remarkLintNoTableIndentation, ['error']],
    [remarkLintNoTabs, ['error']],
    [remarkLintNoUndefinedReferences, ['error']],
    [remarkLintNoUnusedDefinitions, ['error']],
    [remarkLintOrderedListMarkerStyle, ['error', '.']],
    [remarkLintRuleStyle, ['error', '---']],
    [remarkLintStrongMarker, ['error', '*']],
    [remarkLintTableCellPadding, ['error', 'padded']],
    [remarkLintTablePipeAlignment, ['error']],
    [remarkLintTablePipes, ['error']],
    [remarkLintUnorderedListMarkerStyle, ['error', '*']],

  ]

};

export default config;
