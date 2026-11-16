import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";

export default defineConfig([
	// All JS files: recommended rules + Node/CommonJS
	{
		files: ["**/*.js"],
		plugins: {
			js,
		},
		extends: ["js/recommended"],
		languageOptions: {
			sourceType: "commonjs",     // your code uses require / module.exports
			globals: {
				...globals.node,        // require, module, process, __dirname, ...
			},
		},
		rules: {
			"no-unused-vars": "error",
		},
	},
	// Test files only: add Jest globals
	{
		files: ["**/*.test.js", "**/*.spec.js"],
		languageOptions: {
			globals: {
				...globals.jest,        // describe, it, expect, ...
			},
		},
	},
]);
