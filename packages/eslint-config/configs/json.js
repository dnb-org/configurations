import json from "@eslint/json";

export default [
	{
		plugins: {
			json,
		},
	},
	{
		name: "dnb/json",
		files: ["**/*.json"],
		ignores: ["package-lock.json"],
		language: "json/json",
		...json.configs.recommended,
	},

	// lint JSONC files
	{
		name: "dnb/jsonc",
		files: ["**/*.jsonc", ".vscode/*.json"],
		language: "json/jsonc",
		...json.configs.recommended,
	},

	// lint JSON5 files
	{
		name: "dnb/json5",
		files: ["**/*.json5"],
		language: "json/json5",
		...json.configs.recommended,
	},
];
