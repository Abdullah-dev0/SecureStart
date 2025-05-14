import path from "node:path";
import { fileURLToPath } from "node:url";

import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import { defineConfig, globalIgnores } from "eslint/config";
import _import from "eslint-plugin-import";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default defineConfig([
	globalIgnores(["**/node_modules/", "**/.next/", "**/build/", "**/dist/", "**/*.config.js", "**/*.config.ts"]),
	{
		extends: fixupConfigRules(
			compat.extends(
				"next/core-web-vitals",
				"eslint:recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:react/recommended",
				"plugin:react-hooks/recommended",
				"plugin:jsx-a11y/recommended",
				"plugin:import/recommended",
				"plugin:import/typescript",
				"prettier",
			),
		),

		plugins: {
			"@typescript-eslint": fixupPluginRules(typescriptEslint),
			react: fixupPluginRules(react),
			"jsx-a11y": fixupPluginRules(jsxA11Y),
			import: fixupPluginRules(_import),
		},

		languageOptions: {
			parser: tsParser,
		},

		settings: {
			react: {
				version: "detect",
			},

			"import/resolver": {
				typescript: true,
				node: true,
			},
		},

		rules: {
			"react/react-in-jsx-scope": "off",
			"react/prop-types": "off",

			"react/jsx-curly-brace-presence": [
				"error",
				{
					props: "never",
					children: "never",
				},
			],

			"react/self-closing-comp": [
				"error",
				{
					component: true,
					html: true,
				},
			],

			"import/order": [
				"error",
				{
					groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
					"newlines-between": "always",

					alphabetize: {
						order: "asc",
					},
				},
			],

			"import/no-duplicates": "error",

			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					argsIgnorePattern: "^_",
				},
			],

			"@typescript-eslint/consistent-type-imports": [
				"error",
				{
					prefer: "type-imports",
				},
			],

			"@typescript-eslint/no-explicit-any": "error",

			"no-console": [
				"warn",
				{
					allow: ["warn", "error"],
				},
			],

			curly: ["error", "all"],
			eqeqeq: "error",
			"prefer-const": "error",
			"no-nested-ternary": "error",
		},
	},
	{
		files: ["app/**/*.ts?(x)", "components/**/*.ts?(x)"],

		rules: {},
	},
]);
