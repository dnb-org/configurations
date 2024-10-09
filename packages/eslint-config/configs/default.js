import globals from "globals";
import stylisticJs from "@stylistic/eslint-plugin";

import fs from "node:fs";

const path = "./tsconfig.eslint.json";
let projectPath = "";
if (fs.existsSync(path)) {
	projectPath = path;
}

export default {
	name: "dnb/default",
	//files: ["**/!(*.*)"],
	languageOptions: {
		globals: {
			...globals.browser,
			//   var1: 'writable',
			//   var2: 'readonly'
		},
		parserOptions: {
			impliedStrict: true,
			project: projectPath, // keep in for now, this belongs to typescript setup
			extraFileExtensions: ["json"],
		},
	},
	linterOptions: {
		reportUnusedDisableDirectives: "error",
	},
	// processor: {},
	plugins: {
		"@stylistic/js": stylisticJs,
	},
	rules: {
		"@stylistic/js/indent": ["error", 2],
	},
	// settings: {},
};
