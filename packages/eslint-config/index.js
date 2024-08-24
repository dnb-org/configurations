// @ts-check
import eslint from '@eslint/js';
import markdown from "eslint-plugin-markdown";
import defaultConfig from './configs/default.js';
import hugoConfig from './configs/default.hugo.js';

export default [
  eslint.configs.recommended,
  // @ts-ignore
  ...markdown.configs.recommended,
  defaultConfig,
  hugoConfig,
];
