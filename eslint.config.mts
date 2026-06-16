import tseslint from 'typescript-eslint';
import globals from 'globals';
import obsidianmd from 'eslint-plugin-obsidianmd';

export default tseslint.config(
	{
		// 直接用 ignores 代替 globalIgnores
		ignores: [
			'node_modules',
			'dist',
			'esbuild.config.mjs',
			'version-bump.mjs',
			'versions.json',
			'main.js',
			'package.json',
			'package-lock.json',
			'tsconfig.json',
		],
	},
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.mts'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
				extraFileExtensions: ['.json'],
			},
		},
	},
	...obsidianmd.configs.recommended,
);