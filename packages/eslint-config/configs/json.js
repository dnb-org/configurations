import json from "@eslint/json";

export default {
	name: "dnb/json",
	files: ["**/*.json"],
	plugins: {
		json,
	},
	language: "json/json",
	rules: {
		"json/no-duplicate-keys": "error",
	},
};
