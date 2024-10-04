// @ts-check
import eslint from "@eslint/js";
import defaultConfig from "./configs/default.js";
import markdownConfig from "./configs/markdown.js";
import jsonConfig from "./configs/json.js";
import stylisticJs from "@stylistic/eslint-plugin";

export default [
	eslint.configs.all,
	stylisticJs.configs.customize({
		// the following options are the default values
		indent: 2,
		quotes: "single",
		semi: false,
		jsx: true,
		// ...
	}),
	{
		name: "dnb/ignores",
		ignores: ["**/node_modules/*", "**/vendor/*", "**/.git/*"],
	},
	defaultConfig,
	markdownConfig,
	jsonConfig,
];
