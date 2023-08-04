const js = require("@eslint/js");
const node = require("eslint-plugin-node");

console.error("============");
console.error(node.configs.recommended);
console.error("============");

module.exports = [
	{
		ignores: [
			"node_modules/",
			"build",
			"coverage",
		],
	},
	{
		...js.configs.recommended,
		files: [
			"**/*.{js,cjs,jsx}"
		],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "commonjs",
		},
		...node.configs.recommended,
	}
];
