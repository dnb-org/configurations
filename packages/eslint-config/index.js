// @ts-check
import eslint from '@eslint/js';
import markdown from "eslint-plugin-markdown";
import defaultConfig from './configs/default.js';
import markdownConfig from './configs/markdown.js';

export default [
  eslint.configs.all,
  // @ts-ignore
  ...markdown.configs.recommended,
  defaultConfig,
  markdownConfig,
];
