// @ts-check
import eslint from '@eslint/js';
import markdown from "@eslint/markdown";
import defaultConfig from './configs/default.js';
import markdownConfig from './configs/markdown.js';

export default [
  // @ts-ignore
  ...markdown.configs.recommended,
  eslint.configs.all,
  defaultConfig,
  markdownConfig,
];
